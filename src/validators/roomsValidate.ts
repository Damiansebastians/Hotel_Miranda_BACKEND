import joi from 'joi';
import { RoomModel } from '../models/roomModel';

export const roomSchemaCreate = joi.object<RoomModel>({
  img: joi.string().uri().required(),
  bed_Type: joi.string().valid(
    "Double Bed",
    "Single Bed",
    "Suite",
    "Double Superior"
  ).required(),
  facilities: joi.string().valid(
    "AC",
    "Shower",
    "Double Bed",
    "Towel",
    "Bathup",
    "Coffee Set",
    "LED TV",
    "Wifi"
  ).required(),
  price: joi.number().min(0).max(1000).required(),
  offer: joi.number().min(0).max(99).integer().required(),
  status: joi.string().valid(
    "ACTIVE",
    "INACTIVE"
  ).required()
})

export const roomSchemaUpdate = joi.object<RoomModel>({
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