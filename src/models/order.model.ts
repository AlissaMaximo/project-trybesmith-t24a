import { ResultSetHeader } from 'mysql2';
import connection from './connection';

export const list = async () => {  
  const [ordersTable] = await connection.execute(
    `SELECT orders.id, orders.user_id AS userId, JSON_ARRAYAGG(products.id) AS productsIds 
    FROM Trybesmith.orders LEFT JOIN Trybesmith.products ON products.order_id = orders.id
    GROUP BY orders.id
    `,
  );
    
  return ordersTable;
};

export const createOrder = async (userId: number) => {
  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.orders (user_id) VALUES (?)',
    [userId],
  );
  console.log(insertId, 'oi do model');
    
  return insertId;
};

export const updateProducts = async (orderId: number, productId: number) => {
  const [result] = await connection.execute<ResultSetHeader>(
    'UPDATE Trybesmith.products SET order_id = ? WHERE id = ?',
    [orderId, productId],
  );

  return result;
};