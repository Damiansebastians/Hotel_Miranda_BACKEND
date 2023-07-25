import { Request, Response } from 'express';
const roomService = require("../services/roomService");

const getAllRooms = (req: Request, res: Response) => {
  const allRooms = roomService.getAllRooms();
  res.send({status: "OK", data: allRooms});
};

const getOneRoom = (req: Request, res: Response) => {
  const oneRoom = roomService.getOneRoom();
  res.send("Get an existing room");
};

const createNewRoom = (req: Request, res: Response) => {
  const createRoom = roomService.createNewRoom();
  res.send("Create a new room");
};

const updateOneRoom = (req: Request, res: Response) => {
  const updateRoom = roomService.updateOneRoom();
  res.send("Update an existing room");
};

const deleteOneRoom = (req: Request, res: Response) => {
  const removeRoom = roomService.removeOneRoom();
  res.send("Delete an existing room");
};

module.exports = {
  getAllRooms,
  getOneRoom,
  createNewRoom,
  updateOneRoom,
  deleteOneRoom,
};