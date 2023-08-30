import { NextFunction, Request, Response } from "express";
import { UserModel } from "../models/userModel";
import jwt from "jsonwebtoken";
require("dotenv").config();

const passport = require("passport");

export const authController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  passport.authenticate(
    "login",
    async (err: any, user: UserModel, info: any) => {
      try {
        if (err || !user) {
          const error = err ? new Error(err) : new Error("Invalid credentials");
          return next(error);
        }

        req.login(user, { session: false }, async (error) => {
          if (error) return next(error);

          const body = { id: user.id, email: user.email };
          console.log(user.id);
          const token = jwt.sign({ user: body }, process.env.SECRET_KEY!);
          return res.json(token);
        });
      } catch (error) {
        return next(error);
      }
    }
  )(req, res, next);
};
