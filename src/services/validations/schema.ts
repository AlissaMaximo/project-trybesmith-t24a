import Joi from 'joi';

const idSchema = Joi.number().integer().min(1).required();

const addProductSchema = Joi.object({
  name: Joi.string().min(3).required(),
  amount: Joi.string().min(3).required(),
});

export default addProductSchema;