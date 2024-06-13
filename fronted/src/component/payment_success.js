import React from 'react';
import { useNavigate } from 'react-router-dom';
import './payment.css'; // Assuming you have some styles in this file

const PaymentSuccess = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/all_products');
  };

  const handleViewOrder = () => {
    navigate('/orders');
  };

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
