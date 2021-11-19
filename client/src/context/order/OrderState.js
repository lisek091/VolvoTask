import React, { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import OrderContext from './orderContext';
import orderReducer from './orderReducer';

import {
  ADD_ORDER,
  DELETE_ORDER,
  SET_CURRENT,
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
        type: 'professional',
      },
    ],
    current: null,
    filtered: null,
  };

  const [state, dispatch] = useReducer(orderReducer, initialState);

  //add order
  const addOrder = order => {
    order.id = uuidv4();
    dispatch({ type: ADD_ORDER, payload: order });
  };
  //delete order
  const deleteOrder = id => {
    dispatch({ type: DELETE_ORDER, payload: id });
  };
  //set order
  const setCurrent = order => {
    dispatch({ type: SET_CURRENT, payload: order });
  };
  //clear current order
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };
  //update order
  const updateOrder = order => {
    dispatch({ type: UPDATE_ORDER, payload: order });
  };
  //filter orders
  const filterOrders = text => {
    dispatch({ type: FILTER_ORDER, payload: text });
  };
  //clear filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };
  return (
    <OrderContext.Provider
      value={{
        orders: state.orders,
        current: state.current,
        filtered: state.filtered,
        addOrder,
        deleteOrder,
        setCurrent,
        clearCurrent,
        updateOrder,
        filterOrders,
        clearFilter,
      }}
    >
      {props.children}
    </OrderContext.Provider>
  );
};

export default OrderState;
