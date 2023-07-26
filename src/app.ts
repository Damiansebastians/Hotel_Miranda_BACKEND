import express from "express";
const v1RoomRouter = require("./v1/routes/rooms")
const v1BookingRouter = require("./v1/routes/bookings")
const bodyParser = require("body-parser");

export const app = express();

app.use(bodyParser.json());
app.use("/api/v1/rooms", v1RoomRouter);
app.use("/api/v1/bookings", v1BookingRouter);