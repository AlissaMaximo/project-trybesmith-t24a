import { ResultSetHeader } from 'mysql2';
import connection from './connection';

const insert = async (username: string, vocation: string, level: number, password: string) => {  
  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ?, ?)',
    [username, vocation, level, password],
  );

  return insertId;
};

export default insert;