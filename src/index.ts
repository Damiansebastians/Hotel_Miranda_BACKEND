import express from 'express';
const v1RoomRouter = require("./v1/routes/rooms")
const v1BookingRouter = require("./v1/routes/bookings")
const bodyParser = require("body-parser");
require('dotenv').config();

const app = express();
const PORT = process.env.PORT;

app.use(bodyParser.json());
app.use("/api/v1/rooms", v1RoomRouter);
app.use("/api/v1/bookings", v1BookingRouter);

app.listen(PORT, () => { 
  console.log(`Server listening on port ${PORT}`)
});
