import { Request, Response } from 'express';
import jwt from "jsonwebtoken";
import {v4 as uuidv4} from 'uuid';
import 'dotenv/config';

const user = {
  email: "admin@admin.com",
  password: "admin"
};
const loginService = async (req: Request, res: Response) => {
  
  const {email, password} = req.body;

  if (user.email !== email || user.password !== password) {
    throw new Error("Incorrect credentials");

  } else {
    console.log(process.env.SECRET_KEY);
    const token = jwt.sign({ ...user, id: uuidv4() }, process.env.SECRET_KEY as string);
  
    return { auth: true, token };
  }
};

export default loginService;