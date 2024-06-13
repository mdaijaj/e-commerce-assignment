module.exports = (sequelize,Sequelize) => {
    const categoryTable = sequelize.define("category", {
        categoryId: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        categoryName:{
            type:Sequelize.STRING,
        },
        status: {
            type: Sequelize.STRING,
            default: "ACTIVE"
        },
    })
    return categoryTable;
    }