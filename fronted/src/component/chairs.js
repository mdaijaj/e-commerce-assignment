import "../App.css";
import "./footer.css";
import {  Link } from 'react-router-dom';
import Banner from "./banner";
import axios from "axios";
import { useEffect, useState } from "react";

const ChairProducts = () => {
  const [productList, setProductList] = useState([]);


  const ChairsProductList = async () => {
    try {
      const response = await axios.get("/api/v1/all_productlist");
      const result = response.data.data;
      let filterData=result.filter((item)=> item.categoryId== 2)
      setProductList(filterData);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    ChairsProductList();
  }, []);

    return (
      <>
      <Banner />
      {console.log("productList", productList)}

      <div
          class="row row-cols-4 row-cols-sm-5"
          style={{ width: "110rem", margin: "30px" }}
        >
          {productList.map((item) => (
            <Link to={`/product_details/${item.productId}`}>
            <div class="col mb-4">
            <div className="ui link cards">
              <img style={{height: "300px", borderRadius: "10px" }}
                  src={item.image}
                  className="card-img-top"
                  alt="not found images"
                />
                <div class="card-body">
                <h3 class="card-title">{item.productName}</h3>
                  <h5 class="card-price">{item.price}</h5>
                </div>
              </div>
            </div>
            </Link>
          ))}
        </div>
        </>

    );
};

export default ChairProducts;
