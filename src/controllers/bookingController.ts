import { Request, Response, Router } from 'express';
import { createNewBooking, deleteOneBooking, getAllBookings, getOneBooking, updateOneBooking } from '../database/mongoServices/booking';
import { bookingSchemaCreate, bookingSchemaUpdate } from '../validators/bookingsValidate';
import { idValidator } from '../validators/idValidate';

const bookingRouter = Router();

//--------------------------------------------------------------
bookingRouter.get('/', async (_req: Request, res: Response) => {
  try {
    const allBookings = await getAllBookings();
    return res.send({ data: allBookings });
  } catch (error) {
    return res.status(500).send({ status: "Error", message: "Failed to get all bookings" });
  }
});

//--------------------------------------------------------------
bookingRouter.get('/:bookingId', async (req: Request, res: Response) => {
  const bookingId = req.params.bookingId;
  try {
    await idValidator.validateAsync(bookingId);
    const book = await getOneBooking(bookingId);
    if (!book) {
      return res.status(404).send({ status: "Error", message: "Booking not found" });
    }
    return res.send({ data: book });
  } catch (error) {
    return res.status(500).send({ status: "Error", message: "Failed to get booking" });
  }
});

//--------------------------------------------------------------
bookingRouter.post('/', async (req: Request, res: Response) => {
  const newBooking = req.body;
  try {
    bookingSchemaCreate.validate(req.body, { abortEarly: false })
    const createdBooking = await createNewBooking(newBooking);
    return res.status(201).send({ data: createdBooking });
  } catch (error) {
    return res.status(500).send({ status: "Error", message: "Failed to create booking" });
  }
});

//--------------------------------------------------------------
bookingRouter.patch('/:bookingId', async (req: Request, res: Response) => {
  const bookingId = req.params.bookingId;
  const changes = req.body;

  try {
    await idValidator.validateAsync(bookingId);
    bookingSchemaUpdate.validate(req.body, { abortEarly: false })
    await updateOneBooking(bookingId, changes);
    return res.send({ success: true });
  } catch (error) {
    return res.status(500).send({ status: "Error", message: "Failed to update booking" });
  }
});

// --------------------------------------------------------------
bookingRouter.delete('/:bookingId', async (req: Request, res: Response) => {
  const bookingId = req.params.bookingId;
  try {
    await idValidator.validateAsync(bookingId);
    await deleteOneBooking(bookingId);
    return res.send({ message: "Booking deleted successfully" });
  } catch (error) {
    return res.status(500).send({ status: "Error", message: "Failed to delete booking" });
  }
});

export default bookingRouter;