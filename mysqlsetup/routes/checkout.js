const checkoutController = require("../controller/checkout_controller");

module.exports = function (app) {

  // add to cart api
  app.post("/api/v1/createCheckout", checkoutController.createCheckoutDetails);
  app.get("/api/v1/getAllCheckoutList", checkoutController.getAllCheckoutList);
  app.get("/api/v1/getByIdCartDetail/:id", checkoutController.getByIdCheckoutDetail)
  app.put("/api/v1/editCartDetail/:id", checkoutController.editCheckoutDetail)
  app.put("/api/v1/deleteCartDetail/:id", checkoutController.deleteCheckoutDetail)

}