module.exports = (sequelize,Sequelize) => {
    const productTable = sequelize.define("product_detail", {
        productId: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        categoryId: {
            type: Sequelize.STRING,
        },
        productName: {
            type:Sequelize.STRING,
        },
        description: { 
            type:Sequelize.STRING,
        },
        price: {
            type:Sequelize.STRING,
        },
        status: {
            type: Sequelize.STRING,
            default: "ACTIVE"
        },
        image: {
            type:Sequelize.TEXT,
        },
    })
    return productTable;
    }