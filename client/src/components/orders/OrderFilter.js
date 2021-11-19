import React, { useContext, useRef, useEffect } from 'react';
import OrderContext from '../../context/order/orderContext';

const OrderFilter = () => {
  const orderContext = useContext(OrderContext);
  const { filterOrders, clearFilter, filtered } = orderContext;
  const text = useRef('');
  useEffect(() => {
    if (filtered === null) {
      text.current.value = '';
    }
  });
  const onChange = e => {
    if (text.current.value !== '') {
      filterOrders(e.target.value);
    } else {
      clearFilter();
    }
  };
  return (
    <form>
      <input
        ref={text}
        type="text"
        placeholder="filter orders..."
        onChange={onChange}
      />
    </form>
  );
};
export default OrderFilter;
