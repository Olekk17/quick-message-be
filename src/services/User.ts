import { SignUpRequest } from "../types";
import { User } from "../models/User";

const insertUser = (user: SignUpRequest) => {
  return User.create({
    ...user,
    token: null,
    emailVerified: false,
  });
};

const checkIfEmailUsed = (email: string) => {
  return !!User.findOne({ where: { email } });
}

const checkIfUsernameUsed = (username: string) => {
  return !!User.findOne({ where: { username } });
};

const getUser = (id: number) => {
  return User.findOne({ where: { id } });
}

export const UserServices = {
  insertUser,
  checkIfEmailUsed,
  checkIfUsernameUsed,
  getUser
};
