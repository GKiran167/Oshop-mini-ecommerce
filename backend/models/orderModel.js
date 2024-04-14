const mogoose = require('mongoose');

const orderSchema = new mogoose.Schema({
    cartItems:Array,
    amount:String,
    status:String,
    createdAt:Date
});

const orderModel = mogoose.model('Order',orderSchema);

module.exports = orderModel;