import { Request, Response, Router } from 'express';
import { createNewContact, deleteOneContact, getAllContacts, getOneContact, updateOneContact } from '../database/mongoServices/contact';
import { contactSchemaCreate, contactSchemaUpdate } from '../validators/contactsValidate';

const contactRouter = Router();

//--------------------------------------------------------------
contactRouter.get('/', async (_req: Request, res: Response) => {
  try {
    const allContacts = await getAllContacts();
    return res.send({ data: allContacts });
  } catch (error) {
    return res.status(500).send({ status: "Error", message: "Failed to get all contacts" });
  }
});

//--------------------------------------------------------------
contactRouter.get('/:contactId', async (req: Request, res: Response) => {
  const contactId = req.params.contactId;
  try {
    const contact = await getOneContact(contactId);
    if (!contact) {
      return res.status(404).send({ status: "Error", message: "Contact not found" });
    }
    return res.send({ data: contact });
  } catch (error) {
    return res.status(500).send({ status: "Error", message: "Failed to get contact" });
  }
});

//--------------------------------------------------------------
contactRouter.post('/', async (req: Request, res: Response) => {
  const newContact = req.body;
  try {
    contactSchemaCreate.validate(req.body, { abortEarly: false })
    const createdContact = await createNewContact(newContact);
    return res.status(201).send({ data: createdContact });
  } catch (error) {
    return res.status(500).send({ status: "Error", message: "Failed to create contact" });
  }
});

//--------------------------------------------------------------
contactRouter.patch('/:contactId', async (req: Request, res: Response) => {
  const contactId = req.params.contactId;
  const changes = req.body;

  try {
    contactSchemaUpdate.validate(req.body, { abortEarly: false })
    await updateOneContact(contactId, changes);
    return res.send({ success: true });
  } catch (error) {
    return res.status(500).send({ status: 'Error', message: 'Failed to update contact' });
  }
});

// --------------------------------------------------------------
contactRouter.delete('/:contactId', async (req: Request, res: Response) => {
  const contactId = req.params.contactId;
  try {
    await deleteOneContact(contactId);
    return res.send({ message: "Contact deleted successfully" });
  } catch (error) {
    return res.status(500).send({ status: "Error", message: "Failed to delete contact" });
  }
});

export default contactRouter;