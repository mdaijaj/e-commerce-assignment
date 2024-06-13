import React, { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import './regis.css';
import axios from "axios";

const CheckoutList = () => {
  const navigate = useNavigate();
  const [checkoutlist, setCheckoutlist] = useState([]);
  const [selectedId, setSelectedId] = useState(null);

  const checkoutList = async () => {
    try {
      const response = await axios.get("/api/v1/getAllCheckoutList");
      const filterData = response.data.data;
      console.log("filterData", filterData);
      localStorage.setItem("checkoutlist", JSON.stringify(filterData))

      setCheckoutlist(filterData);
    } catch (error) {
      console.error(error.message);
    }
  };

  const checkoutFunc=()=>{
    navigate("/checkout")
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
            <div className="form-check">
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
                <Link to={`/order_summery/${item.checkId}`} className="btn btn-primary" id={`button-${item.id}`}>Delivery Here</Link>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>

    <div className="">
      <button className="btn btn-success" onClick={checkoutFunc}> + Add New Address</button>
    </div>
    </>
  );
};

export default CheckoutList;
