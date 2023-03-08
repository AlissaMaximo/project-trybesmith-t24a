import * as modelOrders from '../models/order.model';

export const listOrders = async () => {
  const ordersList = await modelOrders.list;

  return ordersList;
}; 

export const createOrder = async (userId: number, productsIds: Array<number>) => {
  const newOrderId = await modelOrders.createOrder(userId);

  productsIds.forEach((productId) => {
    modelOrders.updateProducts(newOrderId, productId);
  });
/*   console.log(await modelOrders.temporaryCheck());

  console.log('oi do service. newOrderId:', newOrderId);
  console.log('productsId', productsIds); */
};
