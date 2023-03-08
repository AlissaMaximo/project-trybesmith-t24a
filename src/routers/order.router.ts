import express from 'express';

import * as controllerOrder from '../controllers/order.controller';
import OrderProductsMiddleware from '../middlewares/OrderProductsMiddleware';
import TokenMiddleware from '../middlewares/TokenMiddleware';

const router = express.Router();

const tokenMiddleware = new TokenMiddleware();
const orderProductsMiddleware = new OrderProductsMiddleware();

router.post(
  '/orders',
  tokenMiddleware.verifyToken,
  orderProductsMiddleware.verifyExists,
  orderProductsMiddleware.verifyIsArray,
  orderProductsMiddleware.verifyIsNumberArray,
  controllerOrder.createOrders,
);
router.get('/orders', controllerOrder.listOrders);

export default router;