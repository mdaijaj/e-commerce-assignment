// src/Checkout.js
import React, { useState } from 'react';
import './checkout.css';

const Checkout = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    cardNumber: '',
    expirationDate: '',
    cvv: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleInput=()=>{
    
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform validation and submit form data to the server or payment processor
    console.log('Form submitted:', formData);
  };

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div>
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-row">
            <label>Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="form-row">
           <div>
              <label for="formGroupExampleInput" class="form-label">State</label>
              <select className="form-control" id="inputGroupSelect01" onChange={handleInput} name="state" aria-label="select example">
                  <option selected>{"agentdata?.state"}</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Mahrastra">Mahrastra</option>
                  <option value="Karnataka">Karnataka</option>
                  <option value="MP">MP</option>
                  <option value="UP">UP</option>
                  <option value="Haryana">Haryana</option>
                  <option value="Punjab">Punjab</option>
                  <option value="Bihar">Bihar</option>
              </select>
            </div>  
          <div >
            <label>City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="form-row">
          <div>
            <label>Zip Code</label>
            <input
              type="text"
              name="zip"
              value={formData.zip}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Landmarks</label>
            <input
              type="text"
              name="cvv"
              value={formData.cvv}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="form-row">
        <div>
            <label>Mobile Number</label>
            <input
              type="text"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Alternate Mobile Number</label>
            <input
              type="text"
              name="expirationDate"
              value={formData.expirationDate}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
  <label class="form-check-label" for="inlineRadio1">Home (All Day Delevery)</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
  <label class="form-check-label" for="inlineRadio2">Work/Office (Delevery 10:00 AM 5:00 PM)</label>
</div>
        <button type="submit">Delevery Here </button>
      </form>
    </div>
  );
};

export default Checkout;
