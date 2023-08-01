import { Request, Response, Router } from 'express';
import { createNewRoom, deleteOneRoom, getAllRooms, getOneRoom, updateOneRoom } from '../database/mongoServices/room';

const roomRouter = Router();

//--------------------------------------------------------------

roomRouter.get('/', async (_req: Request, res: Response) => {
  try {
    const allRooms = await getAllRooms();
    return res.json({ data: allRooms });
  } catch (error) {
    return res.status(500).json({ status: "Error", message: "Failed to get all rooms" });
  }
});

//--------------------------------------------------------------
roomRouter.get('/:roomId', async (req: Request, res: Response) => {
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
});

//--------------------------------------------------------------
roomRouter.post('/', async (req: Request, res: Response) => {
  const newRoom = req.body;
  try {
    const createdRoom = await createNewRoom(newRoom);
    return res.status(201).json({ data: createdRoom });
  } catch (error) {
    return res.status(500).json({ status: "Error", message: "Failed to create room" });
  }
});

//--------------------------------------------------------------
roomRouter.patch('/:roomId', async (req: Request, res: Response) => {
  const roomId = req.params.roomId;
  try {
    // const room = await updateOneRoom(roomId);
    return res.json({ success: true });
  } catch (error) {
    return res.status(500).json({ status: "Error", message: "Failed to update room" });
  }
});

// --------------------------------------------------------------
roomRouter.delete('/:roomId', async (req: Request, res: Response) => {
  const roomId = req.params.roomId;
  try {
    await deleteOneRoom(roomId);
    return res.json({ message: "Room deleted successfully" });
  } catch (error) {
    return res.status(500).json({ status: "Error", message: "Failed to delete room" });
  }
});

export default roomRouter;