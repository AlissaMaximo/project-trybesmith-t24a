// Feito com ajuda do Ebraim Oliveira
import express from 'express';

import LoginController from '../controllers/login.controller';

import LoginMiddleware from '../middlewares/login.middleware';

const router = express.Router();

const loginController = new LoginController();
const loginMiddleware = new LoginMiddleware();

router.post(
  '/login',
  loginMiddleware.verifyUsername,
  loginMiddleware.verifyPassword,
  loginController.findUser,
);

export default router;