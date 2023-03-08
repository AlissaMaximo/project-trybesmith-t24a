// Feito com ajuda do Ebraim Oliveira

import { Request, Response } from 'express';
import ServiceLoginUser from '../services/login.service';
import JWTGenerator from '../services/utils/tokenGenerator';

class LoginController {
  constructor(private serviceLoginUser = new ServiceLoginUser()) {}
  
  public jwtGenerator = new JWTGenerator();

  public findUser = async (req: Request, res: Response) => {
    const { username, password } = req.body;
    const login = await this.serviceLoginUser.findUser(username, password);

    if (!login) {
      return res.status(401).json({ message: 'Username or password invalid' });
    }

    const token = this.jwtGenerator.tokenGenerator(login.id, login.username);
    
    res.status(200).json({ token });
  };
}

export default LoginController;