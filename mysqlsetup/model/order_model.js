module.exports = (sequelize,Sequelize) => {
    const orderTable = sequelize.define("order", {
        orderId: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        productId: {
            type: Sequelize.INTEGER,
        },
        userId: {
            type:Sequelize.INTEGER,
        },
        quantity: { 
            type:Sequelize.INTEGER,
        },
        amount: {
            type:Sequelize.INTEGER,
        },
        shippingInfoId: {
            type:Sequelize.INTEGER,
        }, 
        description: {
            type:Sequelize.STRING,
        },
        customer_name: {
            type:Sequelize.STRING,
        },
        status: {
            type: Sequelize.STRING,
            default: "ACTIVE"
        }
    })
    return orderTable;
    }