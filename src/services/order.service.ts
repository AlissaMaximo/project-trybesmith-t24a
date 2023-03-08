import * as modelOrders from '../models/order.model';

export const listOrders = async () => {
  const ordersList = await modelOrders.list;

  return ordersList;
}; 

export const createOrder = async (userId: number, productsIds: Array<number>) => {
  const newOrderId = await modelOrders.createOrder(userId);

  const promiseArray = productsIds
    .map((productId) => modelOrders.updateProducts(newOrderId, productId));

  await Promise.all(promiseArray);
  return { userId, productsIds };
};
