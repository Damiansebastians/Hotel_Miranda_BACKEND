// import express from 'express';

// export const loginRoutes = express.Router();

// const loginController = async (req: express.Request , res: express.Response) => {
//   try {
//     const response = await us (req, res);
//     res.status(200).json(response);
//   } catch (error: any) {
//     res.status(400).json({ error: true, message: "Incorrect credentials" });
//   }
// };

// loginRoutes.post("/", loginController)

import { Router } from "express";
import { authController } from "./authController";

const authRouter = Router();
authRouter.post("/", authController);

export { authRouter };
