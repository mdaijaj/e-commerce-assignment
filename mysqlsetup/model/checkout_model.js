module.exports = (sequelize, Sequelize) => {
    const Checkout = sequelize.define("checkout", {
      checkId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
      },
      address: {
        type: Sequelize.STRING,
      },
      state: {
        type: Sequelize.STRING,
      },
      status: {
        type: Sequelize.STRING,
      },
      city: {
        type: Sequelize.STRING,
      },
      pincode: {
        type: Sequelize.INTEGER,
      },
      landMark: {
        type: Sequelize.STRING,
      },
      mobileNumber: {
        type: Sequelize.STRING,
      },
      alternateNumber: {
        type: Sequelize.STRING,
      },
      deliveryStatus: {
        type: Sequelize.STRING,
      },
      userId: {
        type: Sequelize.INTEGER,
      },
    });
  
    return Checkout;
  };
  