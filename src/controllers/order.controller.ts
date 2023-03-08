import { Request, Response } from 'express';
import * as serviceOrders from '../services/order.service';

export const listOrders = async (_req: Request, res: Response) => {
  const response = await serviceOrders.listOrders();

  return res.status(200).json(response);
};

export const createOrders = async (req: Request, res: Response) => {
  const response = await serviceOrders.createOrder(req.body.id, req.body.productsIds);

  return res.status(201).json(response);
};
