import { ResultSetHeader } from 'mysql2';
import connection from './connection';

const checkLogin = async (
  username: string,
  password: string,
) => {  
  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    `SELECT * FROM Trybesmith.users WHERE username = '${username}' AND password = '${password}'`,
  );
  console.log(insertId);

  return insertId;
};

export default checkLogin;