import { ContactModel } from "../../models/contactModel";
import { contactInterface } from "../mongoDB/contactInterface";

export const getAllContacts = async () => {
  try {
    const contacts = await contactInterface.find();
    return contacts;
  } catch (error) {
    throw { status: 500, message: error };
  }
};

export const getOneContact = async (contactId: string) => {
  try {
    const contact = await contactInterface.find({ id: contactId })
    return contact;
  } catch (error) {
    throw { status: 500, message: error };
  }
};

export const createNewContact = async (newContact: ContactModel): Promise<ContactModel> => {
  try {
    await contactInterface.create(newContact)
    return newContact;
  } catch (error) {
    throw { status: 500, message: error };
  }
};

export const updateOneContact = async (contactId: string, changes: Omit<Partial<ContactModel>, "id">) => {
  try {
    await contactInterface.findOneAndUpdate({ id: contactId }, changes);
  } catch (error) {
    throw { status: 500, message: error };
  }
};

export const deleteOneContact = async (contactId: string): Promise<void> => {
  try {
    await contactInterface.findOneAndDelete({ id: contactId });
  } catch (error) {
    throw { status: 500, message: error };
  }
};