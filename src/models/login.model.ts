import { RowDataPacket } from 'mysql2';
import connection from './connection';

const checkLogin = async (username: string, password: string) => {  
  const [result] = await connection.execute<RowDataPacket[]>(
    'SELECT * FROM Trybesmith.users WHERE username = ? AND password = ?',
    [username, password],
  );
  console.log(result);

  return result;
};

export default checkLogin;