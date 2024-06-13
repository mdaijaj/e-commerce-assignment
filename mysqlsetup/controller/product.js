const db = require("../model/index");
const productModel = db.productModel;
const categoryModel = db.categoryModel;


exports.createProductDetails = async (req, res) => {
    try {
        req.body.status="ACTIVE"
        const response = await productModel.create(req.body);
        return res.status(200).send({ code: 200, message: "Data Created Successfully!", data: response });
    } catch (error) {
        console.log(error);
        return res.status(500).send({ code: 500, message: "Server Error" });
    };
};


exports.getAllProductList = async (req, res) => {
    try {
        const productId = parseInt(req.params.id);
        const getAllData = await productModel.findAll({
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

exports.getByIdProductDetails = async (req, res) => {
    try {
        const productId = parseInt(req.params.id);
        const productData = await productModel.findOne({ where: { productId: productId }});
        const cateData = await categoryModel.findOne({ where: { categoryId: productData.categoryId }});
        let getData={
            productId: productData.productId,
            categoryId: productData.categoryId,
            productName: productData.productName,
            description: productData.description,
            price: productData.price,
            status: productData.status,
            createdAt: productData.createdAt,
            updatedAt: productData.updatedAt,
            categoryName: cateData.categoryName,
            image: productData.image
        }
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

exports.deleteProductDetails = async (req, res) => {
    try {
        const productId = parseInt(req.params.id);
        const kpiDetailsdata = await productModel.findOne({ where: { productId: productId } });
        if (kpiDetailsdata) {
            await productModel.update({ status: "INACTIVE" }, { where: { productId: productId } });
            return res.status(200).send({ code: 200, message: "product is Deleted Successfully!" });
        } else {
            return res.status(403).send({ code: 403, message: "Record Not Found" });
        }
    } catch (error) {
        console.log(error)
        return res.status(500).send({ code: 500, message: "Server Error" });
    };
};


exports.editProductDetails = async (req, res) => {
    try {
        const productId = parseInt(req.params.id);
        const productdetails = await productModel.findOne({ where: { productId:productId } });
        if (!productdetails) {
            throw new BadRequestError("user not found");
        }else{
            const updateData = await productModel.update(req.body,{ where: { productId: productId } })
        } 
    } catch (error) {
        console.log(error)
        return res.status(500).send({ code: 500, message: "Server Error" });
    };
};