import mongoose from "mongoose";
import { RoomModel } from "../../models/roomModel";
const Schema = mongoose.Schema;

const roomSchema = new Schema<RoomModel> ({
  id:  {type: Number, require: true },
  number: Number,
  img: String,
  bed_Type: String,
  room_floor: String,
  facilities: String,
  price: String,
  offer: Number,
  status: String,
  type: String,
})

export const roomInterface = mongoose.model('Rooms', roomSchema)