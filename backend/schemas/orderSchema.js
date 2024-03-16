const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    products: [
        {
            productId: {
                type: mongoose.Types.ObjectId,
                required: [true, 'Product id is required'],
            },
            quantity: {
                type: Number,
                required: [
                    true,
                    'Quantity is required and must be of type number',
                ],
            },
        },
    ],
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
