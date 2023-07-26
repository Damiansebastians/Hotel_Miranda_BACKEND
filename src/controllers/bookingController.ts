import { Request, Response } from 'express';
import { createNewBooking, deleteOneBooking, getBookings, getOneBooking, updateOneBooking } from '../services/bookingService';

//--------------------------------------------------------------

const getAllBookings = async (req: Request, res: Response) => {
  try {
    const allBookings = await getBookings();
    return res.json({ data: allBookings });
  } catch (error) {
    return res.status(500).json({ status: "Error", message: "Failed to get all bookings" });
  }
};

//--------------------------------------------------------------
const getBooking = async (req: Request, res: Response) => {
  const bookingId = req.params.bookingId;
  try {
    const book = await getOneBooking(bookingId);
    if (!book) {
      return res.status(404).json({ status: "Error", message: "Booking not found" });
    }
    return res.json({ data: book });
  } catch (error) {
    return res.status(500).json({ status: "Error", message: "Failed to get booking" });
  }
};

//--------------------------------------------------------------
const createBooking = async (req: Request, res: Response) => {
  const newBooking = req.body;
  try {
    const createdBooking = await createNewBooking(newBooking);
    return res.status(201).json({ data: createdBooking });
  } catch (error) {
    return res.status(500).json({ status: "Error", message: "Failed to create booking" });
  }
};

//--------------------------------------------------------------
const updateBooking = async (req: Request, res: Response) => {
  const bookingId = req.params.bookingId;
  try {
    const book = await updateOneBooking(bookingId);
    return res.json({ success: true });
  } catch (error) {
    return res.status(500).json({ status: "Error", message: "Failed to update booking" });
  }
};

// --------------------------------------------------------------
const deleteBooking = async (req: Request, res: Response) => {
  const bookingId = req.params.bookingId;
  try {
    await deleteOneBooking(bookingId);
    return res.json({ message: "Booking deleted successfully" });
  } catch (error) {
    return res.status(500).json({ status: "Error", message: "Failed to delete booking" });
  }
};

export {
  getAllBookings,
  getBooking,
  createBooking,
  updateBooking,
  deleteBooking
};