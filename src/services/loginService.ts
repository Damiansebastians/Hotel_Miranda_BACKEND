import { Request, Response } from 'express';
import jwt from "jsonwebtoken";
import { randomUUID } from "crypto";
import 'dotenv/config';

const loginService = async (req: Request, res: Response) => {
  const user = {
    email: "admin@admin.com",
    password: "admin",
  };

  const { email, password } = req.body;

  if (user.email !== email || user.password !== password) {
    throw new Error("Incorrect credentials");

  } else {
    console.log(process.env.SECRET_KEY)
    const token = jwt.sign({ ...user, id: randomUUID() }, process.env.SECRET_KEY as string);

    return { auth: true, token };
  }
};

export default loginService;