import { ResultSetHeader } from 'mysql2';
import connection from './connection';

const checkLogin = async (
  username: string,
  vocation: string,
  level: number,
  password: string,
) => {  
  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ?, ?)',
    [username, vocation, level, password],
  );
  console.log(insertId);

  return insertId;
};

export default checkLogin;