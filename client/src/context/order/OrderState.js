import React, { useReducer } from 'react';
import uuid from 'uuid';
import OrderContext from './orderContext';
import orderReducer from './orderReducer';
import {
  ADD_ORDER,
  DELETE_ORDER,
  SET_ORDER,
  CLEAR_CURRENT,
  UPDATE_ORDER,
  FILTER_ORDER,
  CLEAR_FILTER,
} from '../types';

const OrderState = props => {
  const initialState = {
    orders: [
      {
        id: 1,
        name: 'jill sss',
        email: 'fsafda@gma.com',
        phone: '2313414-412',
        type: 'personal',
      },
      {
        id: 2,
        name: 'lis sssddsad',
        email: 'fsafda@gma.com',
        phone: '22314-412',
        type: 'profesional',
      },
    ],
  };

  const [state, dispatch] = useReducer(orderReducer, initialState);

  //add order

  //delete order

  //set order

  //clear current order

  //update order

  //filter orders

  //clear filter

  return (
    <OrderContext.Provider
      value={{
        orders: state.orders,
      }}
    >
      {props.children}
    </OrderContext.Provider>
  );
};

export default OrderState;
