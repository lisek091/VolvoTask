import React, { useContext, Fragment } from 'react';
import OrderContext from '../../context/order/orderContext';

const Orders = () => {
  const orderContext = useContext(OrderContext);

  const { orders } = orderContext;
  return (
    <Fragment>
      {orders.map(order => (
        <h3>{order.name}</h3>
      ))}
    </Fragment>
  );
};

export default Orders;
