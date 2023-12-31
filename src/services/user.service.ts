import cryptoRandomString from 'crypto-random-string';
import { addUserSchema } from './validations/schema';
import userModelInsert from '../models/user.model';

const serviceCreateUser = async (
  username: string, 
  vocation: string, 
  level: number, 
  password: string,
) => {  
  const { error } = addUserSchema.validate({ username, vocation, level, password });
  if (error) {
    const httpStatus = error.details[0].type === 'any.required' ? 400 : 422;
    
    return { status: httpStatus, message: error.message };
  }

  const id = await userModelInsert(username, vocation, level, password);
  
  const token = cryptoRandomString(32);

  return { id, token };
};

export default serviceCreateUser;

/* Fontes:
Como gerar um token: https://medium.com/@norbertofariasmedeiros/five-steps-como-gerar-um-random-token-em-javascript-1e1488a15d28
*/