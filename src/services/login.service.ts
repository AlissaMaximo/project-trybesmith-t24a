import cryptoRandomString from 'crypto-random-string';
import { loginUserSchema } from './validations/schema';
import loginModel from '../models/login.model';

const serviceLogin = async (
  username: string, 
  password: string,
) => {  
  const { error } = loginUserSchema.validate({ username, password });
  
  if (error) {
    return { status: 400, message: error.message };
  }

  const user = await loginModel(username, password);
  
  const token = cryptoRandomString(32);

  return { user, token };
};

export default serviceLogin;

/* Fontes:
Como gerar um token: https://medium.com/@norbertofariasmedeiros/five-steps-como-gerar-um-random-token-em-javascript-1e1488a15d28
*/