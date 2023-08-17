import { Request, Response, Router } from 'express';
import { createNewRoom, deleteOneRoom, getAllRooms, getOneRoom, updateOneRoom } from '../database/mongoServices/room';
import { roomSchemaCreate, roomSchemaUpdate } from '../validators/roomsValidate';

const roomRouter = Router();

//--------------------------------------------------------------
roomRouter.get('/', async (_req: Request, res: Response) => {
  try {
    const allRooms = await getAllRooms();
    return res.send({ data: allRooms });
  } catch (error) {
    return res.status(500).send({ status: "Error", message: "Failed to get all rooms" });
  }
});

//--------------------------------------------------------------
roomRouter.get('/:roomId', async (req: Request, res: Response) => {
  const roomId = req.params.roomId;
  try {
    const room = await getOneRoom(roomId);
    if (!room) {
      return res.status(404).send({ status: "Error", message: "Room not found" });
    }
    return res.send({ data: room });
  } catch (error) {
    return res.status(500).send({ status: "Error", message: "Failed to get room" });
  }
});

//--------------------------------------------------------------
roomRouter.post('/', async (req: Request, res: Response) => {
  const newRoom = req.body;
  try {
    roomSchemaCreate.validate(req.body, { abortEarly:false })
    const createdRoom = await createNewRoom(newRoom);
    return res.status(201).send({ data: createdRoom });
  } catch (error) {
    return res.status(500).send({ status: "Error", message: "Failed to create room" });
  }
});

//--------------------------------------------------------------
roomRouter.patch('/:roomId', async (req: Request, res: Response) => {
  const roomId = req.params.roomId;
  const changes = req.body;

  try {
    roomSchemaUpdate.validate(req.body, { abortEarly:false })
    await updateOneRoom(roomId, changes);
    return res.send({ success: true });
  } catch (error) {
    return res.status(500).send({ status: "Error", message: "Failed to update room" });
  }
});

// --------------------------------------------------------------
roomRouter.delete('/:roomId', async (req: Request, res: Response) => {
  const roomId = req.params.roomId;
  try {
    await deleteOneRoom(roomId);
    return res.send({ message: "Room deleted successfully" });
  } catch (error) {
    return res.status(500).send({ status: "Error", message: "Failed to delete room" });
  }
});

export default roomRouter;