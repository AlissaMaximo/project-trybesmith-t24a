import { Request, Response } from 'express';
import listOrdersService from '../services/order.service';

const listOrders = async (_req: Request, res: Response) => {
  const response = await listOrdersService();
  console.log(response);

  /* if (response.status) {
    return res.status(response.status).json({ message: response.message });
  } */

  return res.status(200).json(response);
};

export default listOrders;