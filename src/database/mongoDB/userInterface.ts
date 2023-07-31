import mongoose from "mongoose";
import { UserModel } from "../../models/userModel";
const { Schema, model } = mongoose;


const userSchema= new Schema<UserModel>({
  id:  { type: Number, require: true },
  img: String,
  name: String,
  number: String,
  Job_Desk: String,
  Schedule: String,
  Contact: String,
  Status: Boolean
})

export const userInterface = mongoose.model('Users', userSchema)