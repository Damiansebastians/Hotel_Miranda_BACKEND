const Room = require("../models/roomModel")

const getAllRooms = () => {
  const allRooms = Room.getAllRooms();
  return allRooms;
};

const getOneRoom = () => {
  return;
};

const createNewRoom = () => {
  return;
};

const updateOneRoom = () => {
  return;
};

const deleteOneRoom = () => {
  return;
};

module.exports = {
  getAllRooms,
  getOneRoom,
  createNewRoom,
  updateOneRoom,
  deleteOneRoom,
};