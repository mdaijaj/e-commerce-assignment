const categoryController = require("../controller/category_controller");

module.exports = function (app) {

  // category Details api
  app.post("/api/v1/create_category", categoryController.create_category);
  app.get("/api/v1/all_catgories", categoryController.getAllCategoriesDetailList);
  app.get("/api/v1/getby_categoryDetails/:id", categoryController.getByIdcategoryDetail)
  app.put("/api/v1/update_categoryDetails/:id", categoryController.editcategoryDetail)
  app.put("/api/v1/delete_categoryDetails/:id", categoryController.deletecategoryDetail)

}