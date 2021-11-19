import React from 'react';
import Orders from '../orders/Orders';
import OrderForm from '../orders/OrderForm';
import OrderFilter from '../orders/OrderFilter';
const Home = () => {
  return (
    <div className="grid-2">
      <div>
        <OrderForm />
      </div>
      <div>
        <OrderFilter />
        <Orders />
      </div>
    </div>
  );
};

export default Home;
