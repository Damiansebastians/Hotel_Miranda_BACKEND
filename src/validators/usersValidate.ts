
import joi from 'joi';
import { UserModel } from '../models/userModel';

export const userSchema = joi.object<UserModel>({
  name: joi.string()
    .required(),
  img: joi.string()
    .uri(),
  Job_Desk: joi.string(),
  Contact: joi.string(),
  Status: joi.string()
    .valid(
      "ACTIVE",
      "INACTIVE"
    )
})