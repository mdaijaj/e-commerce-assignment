import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './order.css';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get('/api/v1/getAllOrderList');
        console.log("kkkkkkk", response)
        setOrders(response.data.data);
      } catch (error) {
        console.error('Error fetching orders:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const handleOrderClick = (orderId) => {
    navigate(`/order/${orderId}`);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  

  return (
    <div className="orders-page">
      <h1>Your Orders</h1>
      {orders.length > 0 ? (
        <ul className="orders-list">
          {orders.map(order => (
            <li key={order.orderId} className="order-item" onClick={() => handleOrderClick(order.orderId)}>
              <h3>Order Id:- #{order.orderId}</h3>
              <p>Date: {new Date(order.date).toLocaleDateString()}</p>
              <p>Customer_name: {order.customer_name}</p>
              <p>description: {order.description}</p>
              <p>Order Date: {order.createdAt}</p>
              <p>Shipping Id: {order.shippingInfoId}</p>
              <p>Status: {order.status}</p>
              <p>Total: ${order.total?order.total: 0}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No orders found.</p>
      )}
    </div>
  );
};

export default Orders;
