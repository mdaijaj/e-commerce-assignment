const db = require("../model/index");
const cartModel = db.cartModel;

exports.createCart = async (req, res) => {
    try {
        const findProduct = await cartModel.findOne({where: {productId: req.body.productId}})
        console.log("findProduct", findProduct)
        if(findProduct){
            return res.status(200).send({ code: 200, message: "This Product allready Add in Card!" });
        }
        req.body.status= "ACTIVE"
        const response = await cartModel.create(req.body);
        return res.status(200).send({ code: 200, message: "Data Created Successfully!", data: response });
    } catch (error) {
        console.log(error);
        return res.status(500).send({ code: 500, message: "Server Error" });
    };
};


exports.getAllCartList = async (req, res) => {
    try {
        const getAllData = await cartModel.findAll({
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

exports.getByIdCartDetail = async (req, res) => {
    try {
        const catId = parseInt(req.params.id);
        const getData = await cartModel.findOne({ where: { category_id: catId } });
        if (getData) {
            return res.status(200).send({ code: 200, message: "Fetch data by ID Successfully", data: getData });
        } else {
            return res.status(403).send({ code: 403, message: "Record Not Found" });
        }
    } catch (error) {
        console.log(error);
        
        return res.status(500).send({ code: 500, message: "Server Error" });
    };
};

/////////////// Delete accredition_logo_details ///////////////

exports.deleteCartDetail = async (req, res) => {
    try {
        const catId = parseInt(req.params.id);
        const chartDetaildata = await cartModel.findOne({ where: { category_id: catId } });
        if (chartDetaildata) {
            await cartModel.update({ status: "INACTIVE" }, { where: { category_id: catId } });
            return res.status(200).send({ code: 200, message: "chartDetail is Deleted Successfully!" });
        } else {
            return res.status(403).send({ code: 403, message: "Record Not Found" });
        }
    } catch (error) {
        console.log(error)
        return res.status(500).send({ code: 500, message: "Server Error" });
    };
};


exports. editCartDetail = async (req, res) => {
    try {
        const catId = parseInt(req.params.id);
        const chartDetaildata = await cartModel.findOne({ where: { category_id:catId } });
        if (!chartDetaildata) {
            throw new BadRequestError("user not found");
        }else{
            const updateData = await categoryModel.update(req.body,{ where: { chart_id: catId } })
        } 
    } catch (error) {
        console.log(error)
        return res.status(500).send({ code: 500, message: "Server Error" });
    };
};