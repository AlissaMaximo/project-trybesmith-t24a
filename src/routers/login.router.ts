import express from 'express';

import controllerLoginUsers from '../controllers/login.controller';

const router = express.Router();

router.get('/login', controllerLoginUsers);

export default router;