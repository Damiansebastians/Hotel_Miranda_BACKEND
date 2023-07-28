import { Request, Response } from 'express';
import jwt from "jsonwebtoken";
import {v4 as uuidv4} from 'uuid';
import 'dotenv/config';

const user = {
  email: "admin@admin.com",
  password: "admin"
};

const loginService = async (req: Request, res: Response) => {
  if (req.user.email !== user.email || req.user.password !== user.password) {
    throw new Error("Incorrect credentials");

  } else {

    const token = jwt.sign({ ...user, id: uuidv4() }, process.env.SECRET_KEY as string);

    return { auth: true, token };
  }
};

export default loginService;