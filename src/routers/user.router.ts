import express from 'express';

import controllerCreateUsers from '../controllers/user.controller';

const router = express.Router();

router.post('/users', controllerCreateUsers);

export default router;