import { RoomModel } from "../../models/roomModel";
import { roomInterface } from "../mongoDB/roomInterface";


export const getAllRooms = async () => {
  try {
    const rooms = await roomInterface.find();
    return rooms;
  } catch (error) {
    throw { status: 500, message: error };
  }
};

export const getOneRoom = async (roomId: string) => {
  try {
    const room = await roomInterface.find({ id: roomId });;
    return room;
  } catch (error) {
    throw { status: 500, message: error };
  }
};

export const createNewRoom = async (newRoom: RoomModel): Promise<RoomModel> => {
  try {
    await roomInterface.create(newRoom);
    return newRoom;
  } catch (error) {
    throw { status: 500, message: error };
  }
};

export const updateOneRoom = async (roomId: string, changes: Omit<Partial<RoomModel>, "id">) => {
  try {
    await roomInterface.findOneAndUpdate({ id: roomId }, changes);;
  } catch (error) {
    throw { status: 500, message: error };
  }
};

export const deleteOneRoom = async (roomId: string): Promise<void> => {
  try {
    await roomInterface.findOneAndDelete({ id: roomId });
  } catch (error) {
    throw { status: 500, message: error };
  }
};