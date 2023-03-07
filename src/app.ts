import express from 'express';
import productsRouter from './routers/product.router';
import usersRouter from './routers/user.router';
import ordersRouter from './routers/order.router';

const app = express();

app.use(express.json());

app.use(productsRouter, usersRouter, ordersRouter);

export default app;
