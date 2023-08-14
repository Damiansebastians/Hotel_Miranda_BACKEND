import joi from 'joi';
import { RoomModel } from '../models/roomModel';

export const roomSchema = joi.object<RoomModel>({
  img: joi.string()
    .uri(),
  bed_Type: joi.string()
    .valid(
      "Double Bed",
      "Single Bed",
      "Suite",
      "Double Superior"
    ),
  facilities: joi.string()
    .valid(
      "AC",
      "Shower",
      "Double Bed",
      "Towel",
      "Bathup",
      "Coffee Set",
      "LED TV",
      "Wifi"
    ),
  price: joi.number()
    .min(0)
    .max(1000),
  offer: joi.number()
    .min(0)
    .max(99)
    .integer(),
  status: joi.string()
    .valid(
      "ACTIVE",
      "INACTIVE"
    )
})