import cryptoRandomString from 'crypto-random-string';
import { addUserSchema } from './validations/schema';
import userModelInsert from '../models/user.model';

const serviceCreateUser = async (
  username: string, 
  vocation: string, 
  level: number, 
  password: string,
) => {
  console.log(username, vocation, level, password);
  
  if (addUserSchema.validate({ username, vocation, level, password }).error) {
    return { status: 401, message: 'user not created' };
  }

  const id = await userModelInsert(username, vocation, level, password);
  
  const token = cryptoRandomString(32);
  console.log(id, token);
  return { id, token };
};

export default serviceCreateUser;

/* Fontes:
Como gerar um token: https://medium.com/@norbertofariasmedeiros/five-steps-como-gerar-um-random-token-em-javascript-1e1488a15d28
*/