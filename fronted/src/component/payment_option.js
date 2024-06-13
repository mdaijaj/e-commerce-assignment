import React, { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import './regis.css';

const CheckoutList = () => {
  const navigate = useNavigate();
  const [checkoutlist, setCheckoutlist] = useState([]);
  const [selectedId, setSelectedId] = useState(null);

  let paymentOption=[
    {
        "checkId": 1,
        "name": "UPI"
    },
    {
        "checkId": 2,
        "name": "Dabit /Credit / ATM Cards"
    },
    {
        "checkId": 3,
        "name": "Internet Banking"
    },
    {
        "checkId": 4,
        "name": "Wallets"
    },
    {
        "checkId": 5,
        "name": "Cash On Delivery"
    },
    {
        "checkId": 6,
        "name": "EMI (Easy Delivery)"
    },
    
]

  const checkoutList = async () => {
    try {

      setCheckoutlist(paymentOption);
    } catch (error) {
      console.error(error.message);
    }
  };


  const paymentFunc=  async()=>{

    let localdata=localStorage.getItem("checkoutlist")
    if(localdata){
        let userInf= JSON.parse(localdata)
        localdata=userInf
    }else{
        localdata=""
    }

    console.log("kkkk", localdata)
    const checkoutapi= await fetch('/api/v1/createOrder', {
      method: "Post",
      body: JSON.stringify({
        productId: localdata[0]?.productId, 
        userId: localdata[0]?.userId,
        shippingInfoId: localdata[0]?.checkId,
        customer_name: localdata[0]?.name, 
      }),
      headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
      },
    })

    const result= await checkoutapi.json()
    console.log("result", result)
    navigate("/payment_success")
  }


  

  useEffect(() => {
    checkoutList();
  }, []);

  const handleRadioChange = (id) => {
    setSelectedId(id);
  };

  return (
    <>
    <div style={{ width: "100%" }}>
      <h1 style={{ backgroundColor: "blue" }}>Delivery Address</h1>
      {checkoutlist.map((item) => (
        <div key={item.id} className="card-header" style={{ textAlign: "left", margin: "30px", padding: "25px" }}>
          <div className="row">
            <div className="form-check" >
              <input
                className="form-check-input"
                type="radio"
                name="deliveryAddress"
                id={`radio-${item.checkId}`}
                value={item.checkId}
                checked={selectedId === item.checkId}
                onChange={() => handleRadioChange(item.checkId)}
              />
            </div>
            {console.log("selectedId", selectedId)}
            <div className="cols-6" style={{ textAlign: "left" }}>
              <h5 className="card-title">{item.name} {item.deliveryStatus} {item.mobileNumber}</h5>
              <h5 className="card-title">{item.address}</h5>
              <h5 className="card-title">{item.city} {item.state} {item.pincode}</h5>
              {selectedId === item.checkId && (
                <button className="btn btn-primary" onClick={paymentFunc} id={`button-${item.id}`}>Payment</button>

              )}
            </div>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default CheckoutList;
