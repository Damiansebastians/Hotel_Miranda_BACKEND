import joi from "joi";

export const idValidator = joi.string().alphanum().required();
