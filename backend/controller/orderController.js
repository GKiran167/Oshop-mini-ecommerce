const orderModel = require('../models/orderModel');
const productModel = require('../models/productModel');

exports.createOrder =async (req, res, next) => {

    //Order Create Api - /api/v1/order
    const cartItems = req.body;
    const amount = Number(cartItems.reduce((acc, item) => ( acc + item.product.price * item.qty), 0)).toFixed(2);
    const status = 'pending';
    const order = await orderModel.create({cartItems, amount, status});

    //Updatinng Product stock
    cartItems.forEach(async (item) => {
        const product = await productModel.findById(item.product._id);
        product.stock = product.stock - item.qty;
        await product.save();
    });


    // console.log(amount)
        res.json({
            success: true,
            order
        })
};