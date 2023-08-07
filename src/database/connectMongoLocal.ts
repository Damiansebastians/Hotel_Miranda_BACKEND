import mongoose from "mongoose";
import 'dotenv/config';

const MongoConnectLocal: any = process.env.MONGO_LOCAL;

export const connect = async () => {
  try {
    await mongoose.connect(MongoConnectLocal);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error(error)
  }
}

export const disconnect = async () => {
  await mongoose.disconnect();
  console.log("Succesfull disconnection");
}