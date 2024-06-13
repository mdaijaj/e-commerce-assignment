const db = require("../model/index");
const orderModel = db.orderModel;
const categoryModel = db.categoryModel;

exports.createOrder = async (req, res) => {
    try {
        req.body.status="ACTIVE"
        const response = await orderModel.create(req.body);
        return res.status(200).send({ code: 200, message: "Data Created Successfully!", data: response });
    } catch (error) {
        console.log(error);
        return res.status(500).send({ code: 500, message: "Server Error" });
    };
};


exports.getAllOrderList = async (req, res) => {
    try {
        const getAllData = await orderModel.findAll({
            where: { status: "ACTIVE"},
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

exports.getByIdOrderDetail = async (req, res) => {
    try {
        const orderId = parseInt(req.params.id);
        const orderData = await orderModel.findOne({ where: { orderId: orderId }});
        // let getData={
        //     productId: orderData.productId,
        //     categoryId: orderData.categoryId,
        //     productName: orderData.productName,
        //     description: orderData.description,
        //     price: orderData.price,
        //     status: orderData.status,
        //     createdAt: orderData.createdAt,
        //     updatedAt: orderData.updatedAt,
        //     image: orderData.image
        // }
        if (orderData) {
            return res.status(200).send({ code: 200, message: "Fetch data by ID Successfully", data: orderData });
        } else {
            return res.status(403).send({ code: 403, message: "Record Not Found" });
        }
    } catch (error) {
        console.log(error);
        
        return res.status(500).send({ code: 500, message: "Server Error" });
    };
};