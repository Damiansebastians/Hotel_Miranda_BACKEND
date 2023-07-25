import { Request, Response, Router } from 'express';
const router = Router();

router.get("/", (req, res) => {
  res.send("Get all rooms");
});

router.get("/:roomId", (req, res) => {
  res.send("Get an existing room");
});

router.post("/", (req, res) => {
  res.send("Create a new room");
});

router.patch("/:roomId", (req, res) => {
  res.send("Update an existing room");
});

router.delete("/:roomId", (req, res) => {
  res.send("Delete an existing room");
});

module.exports = router;