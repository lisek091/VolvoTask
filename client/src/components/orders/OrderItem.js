import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import OrderContext from '../../context/order/orderContext';

const OrderItem = ({ order }) => {
  const { id, name, email, phone, type } = order;

  const orderContext = useContext(OrderContext);
  const { deleteOrder, setCurrent, clearCurrent } = orderContext;
  const onDelete = () => {
    deleteOrder(id);
    clearCurrent();
  };
  return (
    <div className="card bg-light">
      <h3 className="text-primary text-left">
        {name}{' '}
        <span
          style={{ float: 'right' }}
          className={
            'badge' + (type === 'professional' ? '-success' : '-primary')
          }
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </span>
      </h3>
      <ul className="list">
        {email && (
          <li>
            <i className="fas fa-envelope-open">{email} </i>
          </li>
        )}
        {phone && (
          <li>
            <i className="fas fa-phone">{phone} </i>
          </li>
        )}
      </ul>
      <p>
        <button
          className="btn btn-dark btn-sm"
          onClick={() => setCurrent(order)}
        >
          Edit
        </button>
        <button className="btn btn-danger btn-sm" onClick={onDelete}>
          Delete
        </button>
      </p>
    </div>
  );
};

OrderItem.propTypes = {
  order: PropTypes.object.isRequired,
};

export default OrderItem;
