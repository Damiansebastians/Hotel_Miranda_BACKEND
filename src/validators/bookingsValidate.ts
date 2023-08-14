import joi from 'joi';
import { BookingModel } from '../models/bookingModel';

export const bookingSchema = joi.object<BookingModel>({
  img: joi.string()
    .uri(),
  Guest: joi.string()
    .min(3)
    .max(30),
  Order_Date: joi.date(),
  Check_in: joi.date(),
  Check_out: joi.date(),
  roomId: joi.string()
    .guid({ version: 'uuidv4' }),
  price: joi.number()
    .min(0)
    .max(1000),
  amenities: joi.string(),
  Special_Request: joi.string(),
  description: joi.string(),
  Status: joi.string()
    .valid(
      "Booked",
      "Pending",
      "Canceled",
      "Refund"
    )
})