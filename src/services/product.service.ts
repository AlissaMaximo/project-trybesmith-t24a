import * as productsModel from '../models/product.model';
import { addProductSchema } from './validations/schema';

export const createProduct = async (name: string, amount: string) => {
  const { error } = addProductSchema.validate({ name, amount }); 

  if (error) {
    const httpStatus = error.details[0].type === 'any.required' ? 400 : 422;
    
    return { status: httpStatus, message: error.message };
  }

  const id = await productsModel.insert(name, amount);
  return { message: { id, name, amount } };
};

export const listProducts = async () => {
  const productsList = await productsModel.list();
  
  /* if (typeof productsList !== array) {
    return { status: 401, message: 'issue with the list' };
  } */

  return productsList;
}; 