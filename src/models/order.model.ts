// const camelize = require('camelize');
import connection from './connection';

const list = async () => {  
  const [result] = await connection.execute(
    'SELECT * FROM Trybesmith.orders',
  );
    
  return result;
};

/* export const findById = async (productId) => {
  const [[product]] = await connection.execute(
    'SELECT * FROM products WHERE id = ?',
    [productId],
  );
  return camelize(product);
}; */

/* export const insert = async (name: string, amount: string) => {
  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)',
    [name, amount],
  );

  return insertId;
}; */

export default list;