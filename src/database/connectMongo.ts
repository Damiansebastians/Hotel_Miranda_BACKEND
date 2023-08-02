import mongoose from "mongoose";
import 'dotenv/config';

const MongoConnect: any = process.env.MONGODB_URI;

export const connect = async () => {
  try {
    await mongoose.connect(MongoConnect);
    console.log("Connected to MongoDB Atlas");
  } catch (error) {
    console.error(error)
  }
}

export const disconnect = async () => {
  await mongoose.disconnect();
  console.log("Succesfull disconnection");
}