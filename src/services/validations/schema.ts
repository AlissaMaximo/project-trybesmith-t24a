import Joi from 'joi';

// const idSchema = Joi.number().integer().min(1).required();

export const addProductSchema = Joi.object({
  name: Joi.string().min(3).required(),
  amount: Joi.string().min(3).required(),
});

export const addUserSchema = Joi.object({
  username: Joi.string().min(2).required(),
  vocation: Joi.string().min(2).required(),
  level: Joi.number().integer().min(1).required(),
  password: Joi.string().min(8).required(),
});
