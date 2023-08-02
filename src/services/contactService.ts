import { createNewContact, updateOneContact } from "../database/mongoServices/contact";
import { ContactModel } from "../models/contactModel";
import fs from "fs";

const contactData = require("../data/contactData.json");

//----------------------------------------------------------
const getContacts = async () => {
  try {
    const allContacts = await contactData;
    return allContacts;
  } catch (error) {
    throw error;
  }
};

//----------------------------------------------------------
const getOneContact = async (contactId: string) => {
  try {
    const contact = contactData.find((contact: ContactModel) => contact.id === Number(contactId));
    return contact;
  } catch (error) {
    throw error;
  }
};

//----------------------------------------------------------
const createContact = async (newContact: ContactModel) => {
  try {
    const createdContact: ContactModel = await createNewContact(newContact);
    return createdContact;
  } catch (error) {
    throw error;
  }
};

//----------------------------------------------------------
const updateContact = async (contactId: string, changes: Omit<Partial<ContactModel>, "contact_id">) => {
  try {
    const updatedContact = await updateOneContact(contactId, changes);
    return updatedContact;
  } catch (error) {
    throw error;
  }
};

//----------------------------------------------------------
const deleteOneContact = async (contactId: string) => {
  try {
    const contact = contactData.filter((contact: any) => contact.id !== contactId);
    fs.writeFileSync("./data/contactData.json", JSON.stringify(contact));
  } catch (error) {
    throw error;
  }
};

export {
  getContacts,
  getOneContact,
  createContact,
  updateContact,
  deleteOneContact,
};