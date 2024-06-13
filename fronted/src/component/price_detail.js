const PriceDetails = ({priceobj}) => {
  return (
    <>
    <div className="main">
    <div className="card" style={{width: "500px", textAlign: "center"}}>
        <div className="card-body" style={{textAlign: "left"}}>
        {console.log("aijaj", priceobj)}
          <h4 className="card-title d-flex justify-content-center">Price Details</h4><br/>
          <h5 className="card-title">Price {priceobj?.totalItems} items :  {priceobj?.totalAmount}</h5>
          <h5 className="card-title">Discount : {priceobj?.totalAmount *20 /100} </h5>
          <h5 className="card-title">Delivery Charges : 50</h5>
        </div>
        <div className="list-group list-group-flush" style={{textAlign: "left"}}>
          <h4 className="list-group-item">Total Amount {priceobj?.totalAmount + 50 - priceobj?.totalAmount *10 /100 }</h4>
        </div>
        <div className="list-group list-group-flush" style={{textAlign: "left"}}>
          <h5 className="list-group-item">You will save ${priceobj?.totalAmount *20 /100} on this order  </h5>
        </div>
      </div>
    </div>
        </>
  );
};

export default PriceDetails;




