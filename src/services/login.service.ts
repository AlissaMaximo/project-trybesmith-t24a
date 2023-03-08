import connection from '../models/connection';
import LoginModel from '../models/login.model';
import ILogin from '../interfaces/login.interface';

class LoginService {
  public model: LoginModel;

  constructor() {
    this.model = new LoginModel(connection);
  }

  public async findUser(username: string, password: string): Promise<ILogin> {
    const login = await this.model.findUser(username, password);
    return login;
  }
}
export default LoginService;