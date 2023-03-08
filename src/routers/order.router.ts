import express from 'express';

import controllerCreateUsers from '../controllers/order.controller';
import TokenMiddleware from '../middlewares/TokenMiddleware';

const router = express.Router();

const tokenMiddleware = new TokenMiddleware();

router.post('/orders', tokenMiddleware.verifyToken);
router.get('/orders', controllerCreateUsers);

export default router;