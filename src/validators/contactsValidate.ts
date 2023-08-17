import joi from 'joi'
import { ContactModel } from '../models/contactModel'

export const contactSchemaCreate = joi.object<ContactModel>({
  date: joi.string().required(),
  customer: joi.string().required(),
  comment: joi.string().required(),
  action: joi.string().valid("Archive").required()
})

export const contactSchemaUpdate = joi.object<ContactModel>({
  date: joi.string(),
  customer: joi.string(),
  comment: joi.string(),
  action: joi.string().valid("Archive")
})