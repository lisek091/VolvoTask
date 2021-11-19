import React, { useContext, useEffect } from 'react';
import Orders from '../orders/Orders';
import OrderForm from '../orders/OrderForm';
import OrderFilter from '../orders/OrderFilter';
import AuthContext from '../../context/auth/authContext';
const Home = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
    //eslint-disable-next-line
  }, []);

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
