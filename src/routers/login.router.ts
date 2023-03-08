import express from 'express';

import LoginController from '../controllers/login.controller';

const router = express.Router();

const loginController = new LoginController();

router.post('/login', loginController.findUser);

export default router;