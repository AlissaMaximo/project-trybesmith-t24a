// const camelize = require('camelize');
import connection from './connection';

const list = async () => {  
  const [ordersTable] = await connection.execute(
    `SELECT orders.id, orders.user_id AS userId, products.id AS productsIds 
    FROM Trybesmith.orders LEFT JOIN Trybesmith.products ON orders.id = products.order_id
    `,
  );

  console.log(ordersTable);
    
  return ordersTable;
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