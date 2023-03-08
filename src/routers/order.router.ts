import express from 'express';

import * as controllerOrder from '../controllers/order.controller';
import TokenMiddleware from '../middlewares/TokenMiddleware';

const router = express.Router();

const tokenMiddleware = new TokenMiddleware();

router.post('/orders', tokenMiddleware.verifyToken, controllerOrder.createOrders);
router.get('/orders', controllerOrder.listOrders);

export default router;