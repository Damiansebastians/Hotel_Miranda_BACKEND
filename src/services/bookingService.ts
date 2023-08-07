import { createNewBooking, updateOneBooking } from "../database/mongoServices/booking";
import { BookingModel } from "../models/bookingModel";
import fs from "fs";

const bookingData = require("../data/bookingData.json");

const getBookings = async () => {
  try {
    const allBookings = await bookingData
    return allBookings;
  } catch (error) {
    throw error;
  }
};

const getOneBooking = async (bookingId: string) => {
  try {
    const book = bookingData.find((book: BookingModel) => (book.id) === Number(bookingId));
    return book;
  } catch (error) {
    throw error;
  }
};

const createBooking = async (newBooking: BookingModel) => {
  try {
    const createBooking = await createNewBooking(newBooking);
    return createBooking;
  } catch (error) {
    throw error;
  }
};

const updateBooking = async (bookingId: string, changes: Omit<Partial<BookingModel>, "booking_id">) => {
  try {
    const updatedBooking = await updateOneBooking(bookingId, changes);
    return updatedBooking;
  } catch (error) {
    throw error;
  }
};

const deleteOneBooking = async (bookingId: string) => {
  try {
    const book = bookingData.filter((book: any) => book.id !== bookingId);
    fs.writeFileSync("./data/bookingData.json", JSON.stringify(book));
  } catch (error) {
    throw error;
  }
};

export {
  getBookings,
  getOneBooking,
  createBooking,
  updateBooking,
  deleteOneBooking,
};