import express from "express";
import bookingRouter from "./controllers/bookingController";
import roomRouter from "./controllers/roomController";
import contactRouter from "./controllers/contactController";
import userRouter from "./controllers/userController";
import { homeController } from "./controllers/homeController";
import { authRouter } from "./controllers/loginController";
import passport from "passport";
import { connect } from "./database/connectMongo";
import "./middleware/auth";
import cors from "cors";


export const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (_req, res) => {
  res.send('API running on root path');
});

// MongoDB Connection
const connection = async () => await connect();
connection();

//passport
app.use(passport.initialize());

// Public
app.use('/login', authRouter);
app.use('/home', homeController);

// Private routes
app.use("/rooms", passport.authenticate("jwt", { session: false }), roomRouter);
app.use("/bookings", passport.authenticate("jwt", { session: false }), bookingRouter);
app.use("/contacts", passport.authenticate("jwt", { session: false }), contactRouter);
app.use("/users", passport.authenticate("jwt", { session: false }), userRouter);
