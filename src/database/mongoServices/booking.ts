import { BookingModel } from "../../models/bookingModel";
import { bookingInterface } from "../mongoDB/bookingInterface";

export const getAllBookings = async () => {
    try{
        const bookings = await bookingInterface.find();
        return bookings;
    }catch(error){
        throw { status: 500, message: error };
    }
};

export const getOneBooking = async (bookingId: string) => {
    try{
        const booking = await bookingInterface.find({id: bookingId})
        return booking;
    }catch(error){
        throw { status: 500 , message: error };
    }
};

export const createNewBooking = async (newBooking: BookingModel): Promise<BookingModel> => {
    try{
        await bookingInterface.create(newBooking);
        return newBooking;
    }catch (error){
        throw { status: 500, message: error };
    }
};

export const updateOneBooking = async (bookingId: string, changes: Omit<Partial<BookingModel>, "id">): Promise<void> => {
    try{
        await bookingInterface.findOneAndUpdate({id: bookingId}, changes);
    }catch(error){
        throw { status: 500, message: error };
    }
};

export const deleteOneBooking = async (bookingId: string): Promise<void> => {
    try{
        await bookingInterface.findOneAndDelete({id: bookingId})
    }catch(error){
      throw { status: 500, message: error };
    }
};