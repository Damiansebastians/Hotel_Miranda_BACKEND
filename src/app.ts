import express from "express";
import mongoose from "mongoose";
require("dotenv").config();
import bookingRouter from "./controllers/bookingController";
import roomRouter from "./controllers/roomController";
import contactRouter from "./controllers/contactController";
import userRouter from "./controllers/userController";
import { homeController } from "./controllers/homeController";
import { loginRoutes } from "./controllers/loginController";
import loginAuth from "./middleware/auth";

export const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('API running on root path');
});

//MongoDB Connection
const MongoConnect: any = process.env.MONGODB_URI;
mongoose.connect(MongoConnect)
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((err: Error) => console.error(err)
);

// Public
app.use('/login', loginRoutes);
app.use('/home', homeController);

// Private
app.use("/rooms", loginAuth, roomRouter);
app.use("/bookings", loginAuth, bookingRouter);
app.use("/contacts", loginAuth, contactRouter);
app.use("/users", loginAuth, userRouter);