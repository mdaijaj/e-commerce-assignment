module.exports = (sequelize,Sequelize) => {
    const cartTable = sequelize.define("cart", {
        cartId: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        productId:{
            type:Sequelize.STRING,
        },
        productName:{
            type:Sequelize.STRING,
        },
        userId:{
            type:Sequelize.STRING,
        },
        status: {
            type: Sequelize.STRING,
            default: "ACTIVE"
        },
    })
    return cartTable;
    }