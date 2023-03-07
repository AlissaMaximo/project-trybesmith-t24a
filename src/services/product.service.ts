import * as productsModel from '../models/product.model';
import addProductSchema from './validations/schema';

export const createProduct = async (name: string, amount: string) => {
  if (addProductSchema.validate({ name, amount }).error) {
    return { status: 401, message: 'undefined string' };
  }

  const id = await productsModel.insert(name, amount);
  return { message: { id, name, amount } };
};

export const listProducts = async () => {}; 