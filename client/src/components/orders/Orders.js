import React, { useContext, Fragment } from 'react';
import OrderContext from '../../context/order/orderContext';
import OrderItem from './OrderItem';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
const Orders = () => {
  const orderContext = useContext(OrderContext);

  const { orders, filtered } = orderContext;
  if (orders.length === 0) {
    return <h4>Add some orders</h4>;
  }
  return (
    <Fragment>
      <TransitionGroup>
        {filtered !== null
          ? filtered.map(order => (
              <CSSTransition key={order.id} timeout={500} classNames="item">
                <OrderItem key={order.id} order={order} />
              </CSSTransition>
            ))
          : orders.map(order => (
              <CSSTransition key={order.id} timeout={500} classNames="item">
                <OrderItem key={order.id} order={order} />
              </CSSTransition>
            ))}
      </TransitionGroup>
    </Fragment>
  );
};

export default Orders;
