import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './payment.css'; // Assuming you have some styles in this file
import axios from 'axios';

const PaymentSuccess = () => {
  const navigate = useNavigate();
  const [orderdata, setOrderdata] = useState([])

  const handleGoHome = () => {
    navigate('/');
  };

  const handleViewOrder = () => {
    navigate('/orders');
  };

  const orderList = async () => {
    try {
      const response = await axios.get("/api/v1/getAllOrderList");
      const filterData = response.data.data;
      console.log("filterData", filterData);
      setOrderdata(filterData);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(()=>{
    orderList()
  }, [])

  return (
    <div className="payment-success">
      <h1>Payment Successful!</h1>
      <p>Thank you for your purchase. Your order has been placed successfully.</p>
      <div className="payment-success-buttons">
        <button className="btn btn-primary" onClick={handleGoHome}>Go to Home</button>
        <button className="btn btn-secondary" onClick={handleViewOrder}>View Order</button>
      </div>
    </div>
  );
};

export default PaymentSuccess;
