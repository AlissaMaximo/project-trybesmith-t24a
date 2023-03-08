import express from 'express';

import controllerLoginUsers from '../controllers/login.controller';

const router = express.Router();

router.post('/login', controllerLoginUsers);

export default router;