import { Request, Response } from 'express';
import * as productService from '../services/product.service';
// import errorMap from '../utils/errorMap';

export const createProducts = async (req: Request, res: Response) => {
  // const { type, message } = await productService.findAll();
  // if (type) return res.status(errorMap.mapError(type)).json(message);
  // res.status(200).json(message);
  // req.body.atributo 
  console.log(req.body);
  const response = await productService.createProduct(req.body.name, req.body.amount);

  if (response.status) {
    return res.status(response.status).json({ message: response.message });
  }

  return res.status(201).json(response.message);
};

export const listProducts = async (req: Request, res: Response) => {};