import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './order_details.css';

const OrderDetails = () => {
  const { id } = useParams()
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  console.log("orderId", id)
  useEffect(() => {
    const fetchOrderDetails = async () => {
      try {
        const response = await axios.get(`/api/v1/getByIdOrderDetail/${id}`);
        console.log("pppppp", response)
        setOrder(response.data.data);
      } catch (error) {
        console.error('Error fetching order details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrderDetails();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!order) {
    return <p>Order not found.</p>;
  }

  return (
    <div className="order-details">
      <h1>Order #{order.id}</h1>
      <ul className="order-items">
          <li key={order.id}>
              <p>Customer_name: {order.customer_name}</p>
              <p>description: {order.description}</p>
              <p>Shipping Id: {order.shippingInfoId}</p>
              <p>Status: {order.status}</p>
              <p>Total: ${order.total?order.total: 0}</p>
              <p>Order Date: {new Date(order.createdAt).toLocaleDateString()}</p>
          </li>
      </ul>
      <button onClick={() => navigate('/orders')}>Back to Orders</button>
    </div>
  );
};

export default OrderDetails;
