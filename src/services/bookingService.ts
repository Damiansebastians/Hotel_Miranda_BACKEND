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

const addNewBooking = async (newBooking: BookingModel) => {
  try {
    
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
  updateOneBooking,
  deleteOneBooking,
};