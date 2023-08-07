import express from "express";
import bookingRouter from "./controllers/bookingController";
import roomRouter from "./controllers/roomController";
import contactRouter from "./controllers/contactController";
import userRouter from "./controllers/userController";
import { homeController } from "./controllers/homeController";
import { loginRoutes } from "./controllers/loginController";
import loginAuth from "./middleware/auth";
import { connect } from "./database/connectMongo";

export const app = express();
app.use(express.json());

app.get('/', (_req, res) => {
  res.send('API running on root path');
});

//MongoDB Connection
const connection = async () => await connect();
connection();

// Public
app.use('/login', loginRoutes);
app.use('/home', homeController);

// Private
app.use("/rooms", loginAuth, roomRouter);
app.use("/bookings", loginAuth, bookingRouter);
app.use("/contacts", loginAuth, contactRouter);
app.use("/users", loginAuth, userRouter);