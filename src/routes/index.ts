import { Request, Response, Router } from "express";
import { GetUser, SignUp } from "../controllers/User";

export const router = Router();

router.route("/").get((req: Request, res: Response) => {
  res.send("Hello World!");
});

router.route("/signup").post(SignUp);
router.route("/get-user-info/:id").get(GetUser);

