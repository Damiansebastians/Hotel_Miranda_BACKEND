import { BookingInterface } from "../Interfaces/bookingInterface";
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
    const book = bookingData.find((book: BookingInterface) => (book.id) === Number(bookingId));
    return book;
  } catch (error) {
    throw error;
  }
};

const createNewBooking = async (newBooking: BookingInterface) => {
  try {
    const createdBooking: BookingInterface = await createNewBooking(newBooking)
    return createdBooking;
  } catch (error) {
    throw error;
  }
};

const updateOneBooking = async (bookingId: string) => {
  try {

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
  createNewBooking,
  updateOneBooking,
  deleteOneBooking,
};