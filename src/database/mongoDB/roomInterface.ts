import mongoose from "mongoose";
import { RoomModel } from "../../models/roomModel";
const Schema = mongoose.Schema;

const roomSchema = new Schema<RoomModel>({
  img: String,
  bed_Type: String,
  facilities: String,
  price: Number,
  offer: Number,
  status: String
})

export const roomInterface = mongoose.model('Rooms', roomSchema)