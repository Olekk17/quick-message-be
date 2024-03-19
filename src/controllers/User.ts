import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { SignUpRequest } from "../types";
import { UserServices } from "../services/User";

export const SignUp = async (req: Request<any, any, SignUpRequest>, res: Response) => {
  try {
    const { email, username, password } = req.body;
    if (UserServices.checkIfEmailUsed(email)) {
      return res.status(400).send("Email is already used");
    }
    if (UserServices.checkIfUsernameUsed(username)) {
      return res.status(400).send("Username is already used");
    }
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    await UserServices.insertUser({ email, username, password: hashedPassword });
    res.sendStatus(201);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

export const GetUser = async (req: Request<any, any, { id: number}>, res: Response) => {
  try {
    const { id } = req.params;
    const user = await UserServices.getUser(+id);
    res.send(user);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
}
