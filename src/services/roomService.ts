import { updateOneRoom } from "../database/mongoServices/room";
import { RoomModel } from "../models/roomModel";
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
    const room = roomData.find((room: RoomModel) => (room.id) === Number(roomId));
    return room;
  } catch (error) {
    throw error;
  }
};

//---------------------------------------------------
const createNewRoom = async (newRoom: RoomModel) => {
  try {
    const createdRoom: RoomModel = await createNewRoom(newRoom)
    return createdRoom;
  } catch (error) {
    throw error;
  }
};

//---------------------------------------------------
const updateRoom = async (roomId: string, changes: Omit<Partial<RoomModel>, "room_id">) => {
  try {
    const updatedRoom = await updateOneRoom(roomId, changes);
    return updatedRoom;
  } catch (error) {
    throw error;
  }
};

//---------------------------------------------------
const deleteOneRoom = async (roomId: string) => {
  try {
    const room = roomData.filter((room: any) => room.id !== roomId);
    fs.writeFileSync("./data/roomData.json", JSON.stringify(room))
    encoding: 'utf-8'
  } catch (error) {
    throw error;
  }
};

export {
  getRooms,
  getOneRoom,
  createNewRoom,
  updateRoom,
  deleteOneRoom,
};