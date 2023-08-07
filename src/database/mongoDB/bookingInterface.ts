import mongoose from "mongoose";
const { Schema } = mongoose;
import { BookingModel } from "../../models/bookingModel";

const bookingSchema = new Schema<BookingModel>({
    img: String,
    Guest: String,
    Order_Date: Date,
    Check_in: Date,
    Check_out: Date,
    roomId: {
        type: String,
        ref: 'rooms'
    },
    price: Number,
    amenities: String,
    Special_Request: String,
    description: String,
    Status: String
})

export const bookingInterface = mongoose.model('Bookings', bookingSchema)