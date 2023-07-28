import express, { Router } from 'express';
import loginService from '../services/loginService';

export const loginRoutes = Router();

const loginController = async (req: express.Request , res: express.Response) => {
  try {
    const response = await loginService(req, res);
    res.status(200).json(response);
  } catch (error: any) {
    res.status(400).json({ error: true, message: "Incorrect credentials" });
  }
};

loginRoutes.post("api/", loginController)




