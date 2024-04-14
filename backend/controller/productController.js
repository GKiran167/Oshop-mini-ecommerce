const productModel = require('../models/productModel');


// Get Products Api  -  /api/v1/products
//-------------------------------------
exports.getProducts = async (req, res, next) => {
    const query = req.query.keyword?{ name : {
        $regex : req.query.keyword,
        $options : 'i'
    }} : {};

    const products = await productModel.find(query);
    res.json({
        success: true,
        // message : "Get Product's Working !...",
        products
    });
};


//Get SingleProduct Api - /api/v1/product/id
exports.getSingleProduct = async (req, res, next) => {

    try {
        const product = await productModel.findById(req.params.id)
        res.json({
            success: true,
            // message : "Get Single Product Working !...",
            product
        });
    }
    catch (error) {
        res.status(404).json({
            success: false,
            message: "Unable to get the Product with that id...."
        })

    }
};