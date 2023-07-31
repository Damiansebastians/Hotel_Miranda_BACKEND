import mongoose from "mongoose";
import { ContactModel } from "../../models/contactModel";
const Schema = mongoose.Schema;

const contactSchema = new Schema<ContactModel>({
  id:  { type: Number, require: true },
  date: String,
  customer: String,
  comment: String,
  action: String
})

export const contactInterface = mongoose.model('Contacts', contactSchema)