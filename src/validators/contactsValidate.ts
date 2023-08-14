
import joi from 'joi'
import { ContactModel } from '../models/contactModel'

export const contactSchema = joi.object<ContactModel>({
  date: joi.string(),
  customer: joi.string(),
  comment: joi.string(),
  action: joi.string()
    .valid(
      "Archive"
    )
})