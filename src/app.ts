import express from 'express';
import productsRouter from './routers/product.router';
import usersRouter from './routers/user.router';

const app = express();

app.use(express.json());

app.use(productsRouter, usersRouter);

export default app;
