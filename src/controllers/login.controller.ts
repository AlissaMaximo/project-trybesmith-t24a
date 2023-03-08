import { Request, Response } from 'express';
import serviceLoginUser from '../services/login.service';

const controllerLoginUsers = async (req: Request, res: Response) => {
  const response = await 
  serviceLoginUser(req.body.username, req.body.password);
  
  if (response.statusCode) {
    return res.status(response.statusCode).json({ message: response.message });
  }

  return res.status(200).json({ token: response.token });
};

export default controllerLoginUsers;