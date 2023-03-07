import { ResultSetHeader } from 'mysql2';
import connection from './connection';

const insert = async (username: string, vocation: string, level: number, password: string) => {
  console.log(username, vocation, level, password);
  
  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ?, ?)',
    [username, vocation, level, password],
  );
  console.log([{ insertId }]);

  return insertId;
};

export default insert;