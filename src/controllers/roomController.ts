import { Request, Response } from 'express';
import { createNewRoom, deleteOneRoom, getOneRoom, getRooms, updateOneRoom } from '../services/roomService';

//--------------------------------------------------------------

const getAllRooms = async (req: Request, res: Response) => {
  try {
    const allRooms = await getRooms();
    return res.json({ data: allRooms });
  } catch (error) {
    return res.status(500).json({ status: "Error", message: "Failed to get all rooms" });
  }
};

//--------------------------------------------------------------
const getRoom = async (req: Request, res: Response) => {
  const roomId = req.params.roomId;
  try {
    const room = await getOneRoom(roomId);
    if (!room) {
      return res.status(404).json({ status: "Error", message: "Room not found" });
    }
    return res.json({ data: room });
  } catch (error) {
    return res.status(500).json({ status: "Error", message: "Failed to get room" });
  }
};

//--------------------------------------------------------------
const createRoom = async (req: Request, res: Response) => {
  const newRoom = req.body;
  try {
    const createdRoom = await createNewRoom(newRoom);
    return res.status(201).json({ data: createdRoom });
  } catch (error) {
    return res.status(500).json({ status: "Error", message: "Failed to create room" });
  }
};

//--------------------------------------------------------------
const updateRoom = async (req: Request, res: Response) => {
  const roomId = req.params.roomId;
  try {
    const room = await updateOneRoom(roomId);
    return res.json({ success: true });
  } catch (error) {
    return res.status(500).json({ status: "Error", message: "Failed to update room" });
  }
};

// --------------------------------------------------------------
const deleteRoom = async (req: Request, res: Response) => {
  const roomId = req.params.roomId;
  try {
    await deleteOneRoom(roomId);
    return res.json({ message: "Room deleted successfully" });
  } catch (error) {
    return res.status(500).json({ status: "Error", message: "Failed to delete room" });
  }
};

export { getAllRooms, getRoom, createRoom, updateRoom, deleteRoom };