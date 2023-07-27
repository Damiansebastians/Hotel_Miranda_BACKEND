import express from "express";
import bookingRouter from "./controllers/bookingController";
import roomRouter from "./controllers/roomController";
import contactRouter from "./controllers/contactController";

const bodyParser = require("body-parser");

export const app = express();

app.use(bodyParser.json());
app.use("/api/rooms", roomRouter);
app.use("/api/bookings", bookingRouter);
app.use("/api/contacts", contactRouter);