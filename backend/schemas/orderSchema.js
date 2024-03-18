const mongoose = require('mongoose');

const Products = require('./productSchema');
const User = require('./userSchema');

const orderSchema = new mongoose.Schema({
    user: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: User
    },
    products: [
        {
            productId: {
                type: mongoose.Schema.Types.ObjectId,
                // required: [true, 'Product id is required'],
                ref: Products
            },
            quantity: {
                type: Number,
                // required: [
                //     true,
                //     'Quantity is required and must be of type number',
                // ],
            },
        },
    ],
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
