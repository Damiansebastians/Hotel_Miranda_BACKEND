import Router from 'express';
import {
  createBooking,
  deleteBooking,
  getAllBookings,
  getBooking,
  updateBooking
} from '../../controllers/bookingController';

const bookingRouter = Router();

bookingRouter.get('/', getAllBookings);
bookingRouter.get('/:bookingId', getBooking);
bookingRouter.post('/', createBooking);
bookingRouter.patch('/:bookingId', updateBooking);
bookingRouter.delete('/:bookingId', deleteBooking);

module.exports = bookingRouter;