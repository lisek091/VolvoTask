import React, { useContext, useState, useEffect } from 'react';
import OrderContext from '../../context/order/orderContext';

const OrderForm = () => {
  const orderContext = useContext(OrderContext);
  const { addOrder, current, clearCurrent, updateOrder } = orderContext;

  useEffect(() => {
    if (current !== null) {
      setOrder(current);
    } else {
      setOrder({
        name: '',
        email: '',
        phone: '',
        type: 'personal',
      });
    }
  }, [orderContext, current]);

  const [order, setOrder] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'personal',
  });

  const { name, email, phone, type } = order;

  const onChange = e => setOrder({ ...order, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (current === null) {
      addOrder(order);
    } else {
      updateOrder(order);
    }
    clearAll();
  };
  const clearAll = () => {
    clearCurrent();
  };

  return (
    <form onSubmit={onSubmit}>
      <h2 className="text-primary">{current ? 'Edit order' : 'add order'}</h2>
      <input
        type="text"
        placeholder="name"
        name="name"
        value={name}
        onChange={onChange}
      ></input>
      <input
        type="email"
        placeholder="Email"
        name="email"
        value={email}
        onChange={onChange}
      ></input>
      <input
        type="text"
        placeholder="Phone"
        name="phone"
        value={phone}
        onChange={onChange}
      ></input>
      <h5>Order type</h5>
      <input
        type="radio"
        name="type"
        value="personal"
        checked={type === 'personal'}
        onChange={onChange}
      />
      Personal{' '}
      <input
        type="radio"
        name="type"
        value="professional"
        checked={type === 'professional'}
        onChange={onChange}
      />
      professional
      <div>
        <input
          type="submit"
          value={current ? 'Update order' : 'add order'}
          className="btn btn-primary btn-block"
        ></input>
      </div>
      {current && (
        <div>
          <button className="btn btn-light btn-block" onClick={clearAll}>
            Clear
          </button>
        </div>
      )}
    </form>
  );
};

export default OrderForm;
