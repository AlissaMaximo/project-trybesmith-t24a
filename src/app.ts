import express from 'express';
import loginRouter from './routers/login.router';
import ordersRouter from './routers/order.router';
import productsRouter from './routers/product.router';
import usersRouter from './routers/user.router';

const app = express();

app.use(express.json());

app.use(loginRouter, ordersRouter, productsRouter, usersRouter);

export default app;
