const productController = require("../controller/product");

module.exports = function (app) {

  //  product detail api
  app.post("/api/v1/create_product", productController.createProductDetails);
  app.get("/api/v1/all_productlist", productController.getAllProductList);
  app.get("/api/v1/getby_product/:id", productController.getByIdProductDetails)
  app.put("/api/v1/update_productDetails/:id", productController.editProductDetails)
  app.put("/api/v1/delete_productDetails/:id", productController.deleteProductDetails)
}