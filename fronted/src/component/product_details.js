import  { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios"
import './styles.css'; // Ensure you have the necessary styles in this file

const  ProductDetails= () => {
    const navigate = useNavigate();
    const [singleProduct, setSingleProduct]= useState();

    const { id } = useParams()
    

    const addToCart= async(buttonType)=>{

        if(buttonType=="cart"){
            const loginapi= await fetch('/api/v1/createCart', {
                method: "Post",
                body: JSON.stringify({productId: id, productName: singleProduct?.productName}),
                headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
                },
            })
            const result= await loginapi.json()
            console.log("result", result)
            toast.success('add to cart!', { autoClose: 2000 }) 
        }else{
            const loginapi= await fetch('/api/v1/createCart', {
                method: "Post",
                body: JSON.stringify({product_id: id, productName: singleProduct?.productName}),
                headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
                },
            })
            const result= await loginapi.json()
            console.log("result", result)
            navigate("/cartlist")
        }

    }

  
    const allProductDetails = async () => {
        try {
          const response = await axios.get(`/api/v1/getby_product/${id}`);
          const result = response.data.data;
          console.log("response", result);
          setSingleProduct(result);
        } catch (error) {
          console.error(error.message);
        }
      };

    useEffect(()=>{
      allProductDetails()
    }, [])

    return (
          <div className="ui grid container" style={{margin: "25px"}}>
          <div className="ui placeholder segment" style={{margin: "25px", height: "700px", width: "550px"}}>
            <div className="ui two column stackable center aligned grid">
              <div className="ui vertical divider">AND</div>
              <div className="middle aligned row">
                <div className="column lp">
                  <img className="ui fluid image" style={{ height: "400px", width: "250px"}} 
                    src={singleProduct?.image} alt={"title"} />
                </div>
                <div className="column rp">
                  <h1>ProductName: {singleProduct?.productName}</h1>
                  <h1 className="ui teal tag label" style={{width: "150px", height: "40px"}}>Price: $ {singleProduct?.price}</h1>
                  <h3 className="ui brown block header">CategoryId: {singleProduct?.categoryName}</h3>
                  <p>Description: {singleProduct?.description}</p>


                  {/* add to cart and buy now feature */}
                  <div className="button-group">
                    <div className="ui vertical animated button" tabIndex="0">
                    <button className="btn btn-info hidden content" onClick={()=>addToCart("cart")}>
                        <i className="shop icon"></i>
                      </button>
                      <div className="visible content" onClick={addToCart}> 
                        Add to Cart
                      </div>
                    </div>

                    <div className="ui vertical animated button" tabIndex="0">
                      <button className="btn btn-info hidden content" onClick={()=>addToCart("buyNow")}>
                        <i className="money icon"></i>
                      </button>
                      <div className="visible content">
                        Buy Now
                      </div>
                    </div>
                  </div>
                  
                  <ToastContainer />

                </div>
              </div>
            </div>
          </div>
      </div>
    );
}

export default ProductDetails;