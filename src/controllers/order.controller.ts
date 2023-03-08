import { Request, Response } from 'express';
import listOrdersService from '../services/order.service';

const listOrders = async (_req: Request, res: Response) => {
  const response = await listOrdersService();

  return res.status(200).json(response);
};

export default listOrders;