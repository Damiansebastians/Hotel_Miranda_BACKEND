import express, { Request, Response } from 'express';
const v1RoomRouter = require("./v1/routes/room")

const app = express();
const PORT = process.env.PORT || 3000;

app.use("/api/v1/rooms", v1RoomRouter);

app.listen(PORT, () => { 
  console.log(`Server listening on port ${PORT}`)
});
