import { Request, Response } from 'express';

const getAllRooms = (req: Request, res: Response) => {
  res.send("Get all rooms");
};

const getOneRoom = (req: Request, res: Response) => {
  res.send("Get an existing room");
};

const createNewRoom = (req: Request, res: Response) => {
  res.send("Create a new room");
};

const updateOneRoom = (req: Request, res: Response) => {
  res.send("Update an existing room");
};

const deleteOneRoom = (req: Request, res: Response) => {
  res.send("Delete an existing room");
};

module.exports = {
  getAllRooms,
  getOneRoom,
  createNewRoom,
  updateOneRoom,
  deleteOneRoom,
};