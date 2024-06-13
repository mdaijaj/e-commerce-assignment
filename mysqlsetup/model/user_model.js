module.exports = (sequelize,Sequelize) => {
    const userTable = sequelize.define("user", {
        userId: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        firstName: {
            type: Sequelize.STRING,
        },
        lastName:{
            type:Sequelize.STRING,
        },
        email:{
            type:Sequelize.STRING,
        },
        mobile:{
            type:Sequelize.STRING,
        },
        password:{
            type:Sequelize.STRING,
        },
        status: {
            type: Sequelize.STRING,
            default: "ACTIVE"
        },
    })
    return userTable;
    }