import express from 'express';
const v1RoomRouter = require("./v1/routes/room")
const bodyParser = require("body-parser");
require('dotenv').config();

const app = express();
const PORT = process.env.PORT;

app.use(bodyParser.json());
app.use("/api/v1/rooms", v1RoomRouter);

app.listen(PORT, () => { 
  console.log(`Server listening on port ${PORT}`)
});
