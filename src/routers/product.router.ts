import express from 'express';

import * as productController from '../controllers/product.controller';

const router = express.Router();

router.post('/products', productController.createProducts);
router.get('/products', productController.listProducts);

export default router;