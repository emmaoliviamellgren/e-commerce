const mongoose = require('mongoose');

const Order = require('../schemas/orderSchema');
const User = require('../schemas/userSchema');

exports.postOrder = async (req, res) => {
    const { products, user } = req.body;

    if (!mongoose.isValidObjectId(user)) {
        return res.status(400).json({
            message: 'Invalid user!',
        });
    }

    try {
        const postOrder = await Order.create({
            user,
            products,
        });

        res.status(201).json(postOrder);
    } catch (error) {
        res.status(500).json({
            message: 'Something went wrong when creating the order!',
        });
    }
};

exports.fetchOrder = async (req, res) => {
    try {
        if (!mongoose.isValidObjectId(req.params.id)) {
            res.status(400).json({ message: 'ObjectId not valid' });
            throw Error;
        }

        const user = await User.findOne(user._id);
        const orders = await Order.findOne(user._id).populate(
            'products.productId'
        );

        // const populatedOrder = await Order.findById(req.params.id).populate(
        //     'products.productId'
        // );

        res.json(orders);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Something went wrong when fetching the order!',
        });
    }
};
