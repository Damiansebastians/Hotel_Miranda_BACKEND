import mongoose from "mongoose";
import { UserModel } from "../../models/userModel";
const { Schema, model } = mongoose;

const userSchema = new Schema<UserModel>({
  id: {
    type: Number,
    require: true,
    unique: true
  },
  img: {
    type: String,
  },
  name: {
    type: String,
    require: true
  },
  Job_Desk: String,
  Contact: String,
  Status: String
})

export const userInterface = mongoose.model('Users', userSchema)