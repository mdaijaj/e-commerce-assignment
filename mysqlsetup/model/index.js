const config = require("../config/db_config");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD, {
  host: config.HOST,
  dialect: config.dialect,
  operatorsAliases: false,

  pool: {
    max: config.pool.max,
    min: config.pool.min,
    acquire: config.pool.acquire,
    idle: config.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.cartModel = require("./cart_model")(sequelize, Sequelize);
db.categoryModel = require("./category_model")(sequelize, Sequelize);
db.productModel = require("./product_model")(sequelize, Sequelize);
db.userModel = require("./user_model")(sequelize, Sequelize);
db.orderModel = require("./order_model")(sequelize, Sequelize);
db.checkoutModelData = require("./checkout_model")(sequelize, Sequelize);

/////////////////////////////// Relation ///////////////////////////////

// db.categoryModel.hasMany(db.productModel, { foreignKey: 'category_id' });
// db.productModel.belongsTo(db.categoryModel, { foreignKey: 'categoryId' });


module.exports = db;