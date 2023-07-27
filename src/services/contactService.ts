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
const createNewContact = async (newContact: ContactModel) => {
  try {
    const createdContact: ContactModel = await createNewContact(newContact);
    return createdContact;
  } catch (error) {
    throw error;
  }
};

//----------------------------------------------------------
const updateOneContact = async (contactId: string) => {
  try {
    
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
  createNewContact,
  updateOneContact,
  deleteOneContact,
};