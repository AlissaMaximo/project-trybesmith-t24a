import * as productsModel from '../models/product.model';
import addProductSchema from './validations/schema';

export const createProduct = async (name: string, amount: string) => {
  if (addProductSchema.validate({ name, amount }).error) {
    return { status: 401, message: 'product not created' };
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