import insert from '../models/user.model';
import { addUserSchema } from './validations/schema';

const createUser = async (username: string, vocation: string, level: number, password: string) => {
  if (addUserSchema.validate({ username, vocation, level, password }).error) {
    return { status: 401, message: 'user not created' };
  }

  const id = await insert(username, vocation, level, password);
  return { message: { id, username, vocation, level, password } };
};

export default createUser;