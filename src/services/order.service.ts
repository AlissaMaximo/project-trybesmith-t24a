import listOrdersModel from '../models/order.model';

const listOrders = async () => {
  const ordersList = await listOrdersModel();
  
  /* if (typeof OrdersList !== array) {
    return { status: 401, message: 'issue with the list' };
  } */

  return ordersList;
}; 

export default listOrders;