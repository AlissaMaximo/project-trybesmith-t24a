import { Pool } from 'mysql2/promise';
import ILogin from '../interfaces/login.interface';

export default class LoginModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async findUser(username: string, password: string): Promise<ILogin> {
    const query = `SELECT id, username FROM Trybesmith.users 
    WHERE username = (?) AND password = (?)`;
    const result = await this.connection
      .execute(query, [username, password]);
      
    console.log(result[0]);
    const [rows] = result;
    const [login] = rows as ILogin[];
    
    console.log('login', login);
    
    return login;
  }
}