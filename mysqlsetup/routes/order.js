const cartController = require("../controller/order_controller");

module.exports = function (app) {

  // add to cart api
  app.post("/api/v1/createOrder", cartController.createOrder);
  app.get("/api/v1/getAllOrderList", cartController.getAllOrderList);
  app.get("/api/v1/getByIdOrderDetail/:id", cartController.getByIdOrderDetail)
}