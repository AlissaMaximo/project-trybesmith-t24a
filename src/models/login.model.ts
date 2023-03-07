import connection from './connection';

const checkLogin = async (
  username: string,
  password: string,
) => {  
  const [result] = await connection.execute(
    `SELECT username, password FROM Trybesmith.users
    WHERE username = '${username}' AND password = '${password}'`,
  );
  console.log(result);

  return result;
};

export default checkLogin;