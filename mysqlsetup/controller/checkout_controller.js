const db = require("../model/index");

const checkoutModel = db.checkoutModelData;



exports.createCheckoutDetails = async (req, res) => {
  try {
    console.log(req.body);
    const response = await checkoutModel.create({
      status: "ACTIVE",
      name: req.body.name,
      address: req.body.address,
      state: req.body.state,
      city: req.body.city,
      pincode: req.body.pincode,
      landMark: req.body.landMark,
      mobileNumber: req.body.mobileNumber,
      alternateNumber: req.body.alternateNumber,
      deliveryStatus: req.body.deliveryStatus,
      userId: req.body.userId
    });
    return res.status(200).send({ code: 200, message: "Data Created Successfully!", data: response });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ code: 500, message: "Server Error" });
  }
};

exports.getAllCheckoutList = async (req, res) => {
  try {
      const getAllData = await checkoutModel.findAll({
          where: { status: "ACTIVE" },
      })
      if (getAllData) {
          return res.status(200).send({ code: 200, message: "Fetch All Data Successfully", data: getAllData });
      } else {
          return res.status(403).send({ code: 403, message: "Record Not Found" });
      };
  } catch (error) {
      console.log(error);
      return res.status(500).send({ code: 500, message: "Server Error" });
  };
};

/////////////// GetById accredition_logo_details ///////////////

exports.getByIdCheckoutDetail = async (req, res) => {
  try {
    const catId = parseInt(req.params.id);
    const getData = await checkoutModel.findOne({ where: { checkId: catId } });
    if (getData) {
      return res
        .status(200)
        .send({
          code: 200,
          message: "Fetch data by ID Successfully",
          data: getData,
        });
    } else {
      return res.status(403).send({ code: 403, message: "Record Not Found" });
    }
  } catch (error) {
    console.log(error);

    return res.status(500).send({ code: 500, message: "Server Error" });
  }
};

/////////////// Delete accredition_logo_details ///////////////

exports.deleteCheckoutDetail = async (req, res) => {
  try {
    const catId = parseInt(req.params.id);
    const chartDetaildata = await checkoutModel.findOne({
      where: { checkId: catId },
    });
    if (chartDetaildata) {
      await checkoutModel.remove({ where: { checkId: catId } });
      return res
        .status(200)
        .send({ code: 200, message: "chartDetail is Deleted Successfully!" });
    } else {
      return res.status(403).send({ code: 403, message: "Record Not Found" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send({ code: 500, message: "Server Error" });
  }
};

exports.editCheckoutDetail = async (req, res) => {
  try {
    const catId = parseInt(req.params.id);
    const chartDetaildata = await checkoutModel.findOne({
      where: { checkId: catId },
    });
    if (!chartDetaildata) {
      throw new BadRequestError("user not found");
    } else {
      const updateData = await checkoutModel.update(req.body, {
        where: { checkId: catId },
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send({ code: 500, message: "Server Error" });
  }
};
