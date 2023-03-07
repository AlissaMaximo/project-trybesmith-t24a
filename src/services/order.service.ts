import listOrdersModel from '../models/order.model';

const listProducts = async () => {
  const ordersList = await listOrdersModel();
  
  /* if (typeof productsList !== array) {
    return { status: 401, message: 'issue with the list' };
  } */

  return ordersList;
}; 

export default listProducts;