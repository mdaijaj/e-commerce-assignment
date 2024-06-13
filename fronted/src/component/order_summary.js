import React, { useEffect, useState } from 'react';
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import PriceDetails from './price_detail';
import { useNavigate } from 'react-router-dom';

const OrderSummary = () => {
  const initialCart = [
    { id: 1, name: 'Product 1', price: 100, description: "Green, Camera Bump Protector, Pack of: 1" },
    { id: 2, name: 'Product 2', price: 150 , description: "Green, Camera Bump Protector, Pack of: 1"},
    { id: 3, name: 'Product 3', price: 200, description: "Green, Camera Bump Protector, Pack of: 1" },
  ];

  const [cart, setCart] = useState([]);
  const [totalAmount, setTotalAmount]= useState()
  const navigate= useNavigate()

  const getAllCartList=()=>{
    setCart(initialCart)
  }

  const [quantities, setQuantities] = useState(initialCart?.map(() => 1));

  const incrementQuantity = (index) => {
    setQuantities(quantities.map((qty, i) => i === index ? qty + 1 : qty));
    setTotalAmount()
  };

  const decrementQuantity = (index) => {
    setQuantities(quantities.map((qty, i) => i === index && qty > 0 ? qty - 1 : qty));
    setTotalAmount()
  };

  const removeItem = (index) => {
    setCart(cart.filter((_, i) => i !== index));
    setQuantities(quantities.filter((_, i) => i !== index));
    setTotalAmount()

  };

  const amountCalulation= ()=>{
    let totalAmount=0;
    cart.map((item, index)=> totalAmount+=quantities[index] *  item.price)
    let obj={
      totalAmount: totalAmount,
      totalItem: cart.length
    }
    setTotalAmount(obj)
  }

  const placeToOrder=()=>{


    
    navigate('/payment_option')
  }


  useEffect(()=>{
    getAllCartList()
    amountCalulation()
  }, [quantities])

  return (
    <>
    <div className='row'>
    <div className="cart col-6 ml-4">
    <h2>Order Summary</h2>
    {cart.length === 0 ? (
      <p>No items in the cart</p>
    ) : (
      cart.map((item, index) => (
        <div key={item.id} className="row" style={{margin: "auto", padding: "25px", border: "3px solid black"}}>
        <div className='cols-6'>
          <div className='row'>
          <div key={item.id} className="cols-4">
            <img src='https://cdn.bbopokertables.com/template/asset/2021/11/prestige-x/Prestige-X-Gallery-Update-01.jpg' alt='not found images'height="150px" width="100px" />
            <div>
              <button onClick={() => decrementQuantity(index)}> - </button>
              <input type='text' name='quantityAdd' value={quantities[index]} readOnly />
              <button onClick={() => incrementQuantity(index)}> + </button>
            </div>
            </div>
          <div className='cols-4'>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <h3 style={{fontWeight: "bold"}}>Price: ${quantities[index] *  item.price}</h3>
          </div>
          <div className='cols-4'>
              <button onClick={() => removeItem(index)}>
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </div>
        </div>
        </div>
        </div>
      ))
    )}
      <div className='main'>
      <button className='btn btn-info' onClick={placeToOrder} style={{width: "200px", height: "50px", marginTop: "25px"}}>Continue</button>
      </div>
    </div>
    <div className='cols-6 m-5' style={{marginLeft: "-25px"}}>
      <PriceDetails priceobj={totalAmount}/>
    </div>
    </div>
  </>
  );
};

export default OrderSummary;
