import mongoose from "mongoose";
import { UserModel } from "../../models/userModel";
const { Schema, model } = mongoose;

const userSchema = new Schema<UserModel>({
  id: {
    type: Number,
    require: true
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
  Status: Boolean
})

export const userInterface = mongoose.model('Users', userSchema)