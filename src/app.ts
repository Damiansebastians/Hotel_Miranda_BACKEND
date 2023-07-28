import express from "express";
import bookingRouter from "./controllers/bookingController";
import roomRouter from "./controllers/roomController";
import contactRouter from "./controllers/contactController";
import userRouter from "./controllers/userController";
import loginRouter from "./middleware/auth";
import loginAuth from "./middleware/auth";
import homeController from "./controllers/homeController";
const bodyParser = require("body-parser");


export const app = express();
app.use(bodyParser.json());

// Public
app.use('/api/login', loginRouter);
app.use('/api', homeController);

// Private
app.use("/api/rooms", loginAuth, roomRouter);
app.use("/api/bookings", loginAuth, bookingRouter);
app.use("/api/contacts", loginAuth, contactRouter);
app.use("/api/users", loginAuth, userRouter);