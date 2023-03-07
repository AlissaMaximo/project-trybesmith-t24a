import express from 'express';

import * as productController from '../controllers/product.controller';

// import validateNewProductFields from '../middlewares/validateNewProductFields';

const router = express.Router();

router.post('/products', productController.createProducts);
router.get('/products', productController.listProducts);

export default router;