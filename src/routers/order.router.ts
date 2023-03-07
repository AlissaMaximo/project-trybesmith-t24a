import express from 'express';

import controllerCreateUsers from '../controllers/order.controller';

const router = express.Router();

router.get('/orders', controllerCreateUsers);

export default router;