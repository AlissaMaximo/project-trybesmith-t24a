import { Request, Response } from 'express';
import serviceLoginUser from '../services/login.service';

const controllerLoginUsers = async (req: Request, res: Response) => {
  const response = await 
  serviceLoginUser(req.body.username, req.body.vocation, req.body.level, req.body.password);
  
  /* if (response.status) {
    return res.status(response.status).json({ message: response.message });
  } */

  return res.status(201).json({ token: response.token });
};

export default controllerLoginUsers;