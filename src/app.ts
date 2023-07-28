import express from "express";
import bookingRouter from "./controllers/bookingController";
import roomRouter from "./controllers/roomController";
import contactRouter from "./controllers/contactController";
import userRouter from "./controllers/userController";
import { homeController } from "./controllers/homeController";
import { loginRoutes } from "./controllers/loginController";
import loginAuth from "./middleware/auth";
const bodyParser = require("body-parser");


export const app = express();
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('API running on root path');
});

// Public
app.use('/login', loginRoutes);
app.use('/home', homeController);

// Private
app.use("/rooms", loginAuth, roomRouter);
app.use("/bookings", loginAuth, bookingRouter);
app.use("/contacts", loginAuth, contactRouter);
app.use("/users", loginAuth, userRouter);