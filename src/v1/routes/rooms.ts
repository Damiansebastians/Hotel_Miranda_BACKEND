import Router from 'express';
import { createRoom, deleteRoom, getAllRooms, getRoom, updateRoom } from '../../controllers/roomController';

const roomRouter = Router();

roomRouter.get("/", getAllRooms);
roomRouter.get("/:roomId", getRoom);
roomRouter.post("/", createRoom);
roomRouter.put("/:roomId", updateRoom);
roomRouter.delete("/:roomId", deleteRoom);

module.exports = roomRouter;