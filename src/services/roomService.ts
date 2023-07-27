import { RoomInterface } from "../Interfaces/roomInterface";
import fs from "fs";

const roomData = require("../data/roomData.json");

//---------------------------------------------------
const getRooms = async () => {
  try {
    const allRooms = await roomData
    return allRooms;
  } catch (error) {
    throw error;
  }
};

//---------------------------------------------------
const getOneRoom = async (roomId: string) => {
  try {
    const room = roomData.find((room: RoomInterface) => (room.id) === Number(roomId));
    return room;
  } catch (error) {
    throw error;
  }
};

//---------------------------------------------------
const createNewRoom = async (newRoom: RoomInterface) => {
  try {
    const createdRoom: RoomInterface = await createNewRoom(newRoom)
    return createdRoom;
  } catch (error) {
    throw error;
  }
};

//---------------------------------------------------
const updateOneRoom = async (roomId: string) => {
  try {

  } catch (error) {
    throw error;
  }
};

//---------------------------------------------------
const deleteOneRoom = async (roomId: string) => {
  try {
    const room = roomData.filter((room: any) => room.id !== roomId);
    fs.writeFileSync("./data/roomData.json", JSON.stringify(room));
  } catch (error) {
    throw error;
  }
};

export {
  getRooms,
  getOneRoom,
  createNewRoom,
  updateOneRoom,
  deleteOneRoom,
};