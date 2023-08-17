import joi from 'joi';
import { BookingModel } from '../models/bookingModel';

export const bookingSchemaCreate = joi.object<BookingModel>({
  img: joi.string().uri().required(),
  Guest: joi.string().min(3).max(30).required(),
  Order_Date: joi.date().required(),
  Check_in: joi.date().required(),
  Check_out: joi.date().required(),
  roomId: joi.string().guid({ version: 'uuidv4' }).required(),
  price: joi.number().min(0).max(1000).required(),
  amenities: joi.string().required(),
  Special_Request: joi.string().required(),
  description: joi.string().required(),
  Status: joi.string().valid(
    "Booked",
    "Pending",
    "Canceled",
    "Refund"
  ).required()
})

export const bookingSchemaUpdate = joi.object<BookingModel>({
  img: joi.string().uri(),
  Guest: joi.string().min(3).max(30),
  Order_Date: joi.date(),
  Check_in: joi.date(),
  Check_out: joi.date(),
  roomId: joi.string().guid({ version: 'uuidv4' }),
  price: joi.number().min(0).max(1000),
  amenities: joi.string(),
  Special_Request: joi.string(),
  description: joi.string(),
  Status: joi.string().valid(
    "Booked",
    "Pending",
    "Canceled",
    "Refund"
  )
})