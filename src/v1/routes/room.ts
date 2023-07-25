import Router from 'express';
const roomController = require("../../controllers/roomController");

const router = Router();

router.get("/", roomController.getAllRooms);
router.get("/:roomId", roomController.getOneRoom);
router.post("/", roomController.createNewRoom);
router.patch("/:roomId", roomController.updateOneRoom);
router.delete("/:roomId", roomController.deleteOneRoom);

module.exports = router;