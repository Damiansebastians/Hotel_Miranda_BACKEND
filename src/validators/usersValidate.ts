
import joi from 'joi';
import { UserModel } from '../models/userModel';

//create
export const userSchemaCreate = joi.object<UserModel>({
  name: joi.string().required(),
  img: joi.string().uri().required(),
  Job_Desk: joi.string().required(),
  Contact: joi.string().trim().required(),
  Status: joi.string().valid("ACTIVE", "INACTIVE").required()
})

//update
export const userSchemaUpdate = joi.object<UserModel>({
  name: joi.string().required(),
  img: joi.string().uri(),
  Job_Desk: joi.string(),
  Contact: joi.string().trim(),
  Status: joi.string().valid("ACTIVE", "INACTIVE")
})