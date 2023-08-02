import { Request, Response, Router } from 'express';
import { createNewContact, deleteOneContact, getAllContacts, getOneContact, updateOneContact } from '../database/mongoServices/contact';

const contactRouter = Router();

//--------------------------------------------------------------
contactRouter.get('/', async (_req: Request, res: Response) => {
  try {
    const allContacts = await getAllContacts();
    return res.json({ data: allContacts });
  } catch (error) {
    return res.status(500).json({ status: "Error", message: "Failed to get all contacts" });
  }
});

//--------------------------------------------------------------
contactRouter.get('/:contactId', async (req: Request, res: Response) => {
  const contactId = req.params.contactId;
  try {
    const contact = await getOneContact(contactId);
    if (!contact) {
      return res.status(404).json({ status: "Error", message: "Contact not found" });
    }
    return res.json({ data: contact });
  } catch (error) {
    return res.status(500).json({ status: "Error", message: "Failed to get contact" });
  }
});

//--------------------------------------------------------------
contactRouter.post('/', async (req: Request, res: Response) => {
  const newContact = req.body;
  try {
    const createdContact = await createNewContact(newContact);
    return res.status(201).json({ data: createdContact });
  } catch (error) {
    return res.status(500).json({ status: "Error", message: "Failed to create contact" });
  }
});

//--------------------------------------------------------------
contactRouter.patch('/:contactId', async (req: Request, res: Response) => {
  const contactId = req.params.contactId;
  try {
    // const contact = await updateOneContact(contactId);
    return res.json({ success: true });
  } catch (error) {
    return res.status(500).json({ status: "Error", message: "Failed to update contact" });
  }
});

// --------------------------------------------------------------
contactRouter.delete('/:contactId', async (req: Request, res: Response) => {
  const contactId = req.params.contactId;
  try {
    await deleteOneContact(contactId);
    return res.json({ message: "Contact deleted successfully" });
  } catch (error) {
    return res.status(500).json({ status: "Error", message: "Failed to delete contact" });
  }
});

export default contactRouter;