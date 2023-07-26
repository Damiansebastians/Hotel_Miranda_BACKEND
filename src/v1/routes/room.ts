import Router from 'express';
import { createRoom, deleteRoom, getAllRooms, getRoom, updateRoom } from '../../controllers/roomController';

const router = Router();

router.get("/", getAllRooms);
router.get("/:roomId", getRoom);
router.post("/", createRoom);
router.put("/:roomId", updateRoom);
router.delete("/:roomId", deleteRoom);

module.exports = router;