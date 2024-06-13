const cartController = require("../controller/cart_controller");

module.exports = function (app) {

  // add to cart api
  app.post("/api/v1/createCart", cartController.createCart);
  app.get("/api/v1/getAllCartList", cartController.getAllCartList);
  app.get("/api/v1/getByIdCartDetail/:id", cartController.getByIdCartDetail)
  app.put("/api/v1/editCartDetail/:id", cartController.editCartDetail)
  app.put("/api/v1/deleteCartDetail/:id", cartController.deleteCartDetail)

}