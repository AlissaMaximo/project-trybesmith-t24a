import { Request, Response } from 'express';
import createUser from '../services/user.service';

const createUsers = async (req: Request, res: Response) => {
  const response = await 
  createUser(req.body.username, req.body.vocation, req.body.level, req.body.password);

  if (response.status) {
    return res.status(response.status).json({ message: response.message });
  }

  return res.status(201).json(response.message);
};

export default createUsers;