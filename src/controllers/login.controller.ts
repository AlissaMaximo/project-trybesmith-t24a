import { Request, Response } from 'express';
import ServiceLoginUser from '../services/login.service';
import JWTGenerator from '../services/utils/tokenGenerator';
/* const controllerLoginUsers = async (req: Request, res: Response) => {
  const response = await 
  serviceLoginUser(req.body.username, req.body.password);
  
  if (response.statusCode) {
    return res.status(response.statusCode).json({ message: response.message });
  }

  return res.status(200).json({ token: response.token });
};

export default controllerLoginUsers; */

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