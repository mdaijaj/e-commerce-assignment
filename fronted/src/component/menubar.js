import Errorpage from './error';
import {Route, Routes} from 'react-router-dom';
import HomePage from './home'
import AllProducts from './all_product';
import ChairsProducts from './chairs';
import TableProducts from './tables'
import DiningBallProducts from './diningball'
import ProductDetails from './product_details'
import CartList from './cartlist';
import Checkout from './checkout'
import CheckoutList from './checkoutlist'
import PriceDetails from './price_detail';
import Register from './register';
import Login from './Login'
import OrderSummary from './order_summary'
import PaymentOption from './payment_option'
import PaymentSuccess from './payment_success'
import Orders from './order';
import OrdersDetails from './order_details';

const Routing=()=>{

  return(
    <>
        <Routes>
          <Route exact path="/" element={<HomePage/>} />  
          <Route path="/all_products" element={<AllProducts/>} />
          <Route path="/cartlist" element={<CartList />} />
          <Route path="/order_summary" element={<OrderSummary />} />
          <Route path="/price_details" element={<PriceDetails />} />
          <Route path="/product_details/:id" element={<ProductDetails/>} />
          <Route path="/chairs" element={<ChairsProducts/>} />
          <Route path="/tables" element={<TableProducts/>} />
          <Route path="/dining_tops" element={<DiningBallProducts/>} />
          <Route path="/checkout" element={<Checkout/>} />
          <Route path="/checkout_list" element={<CheckoutList/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/order_summery/:id" element={<OrderSummary/>} />
          <Route path="/payment_option" element={<PaymentOption/>} />
          <Route path="/payment_success" element={<PaymentSuccess/>} />
          <Route path="/orders" element={<Orders/>} />
          <Route path="/order/:id" element={<OrdersDetails/>} />
          <Route path="/*" element={<Errorpage/>} />
        </Routes>
    </>
    )
}


export default Routing;