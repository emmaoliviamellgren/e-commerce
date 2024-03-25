const mongoose = require('mongoose');
const Order = require('../schemas/orderSchema');
const User = require('../schemas/userSchema');
const jwt = require('jsonwebtoken');

exports.postOrder = async (req, res) => {

    // An order can only be created if user is logged in (has a token)

    const { products } = req.body;

    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    
    try {

        if (token === null) return res.status(401).json({ message: 'Access unauthorized' });

        // Check if user has valid token
        const verifiedUser = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

        const userId = verifiedUser._id;

        if (!mongoose.isValidObjectId(userId)) {
            return res.status(400).json({
                message: 'Invalid user!',
            });
        }

        const postOrder = await Order.create({
            user: userId,
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
    const user = req.user;

    try {
        if (!mongoose.isValidObjectId(user._id)) {
            res.status(400).json({ message: 'ObjectId not valid' });
            throw Error;
        }

        const orders = await Order.find({ user: user._id }).populate(
            'products.productId'
        );

        // Calculate the total amount for each order
        const ordersWithTotalAmount = orders.map((order) => {
            const orderObject = order.toObject();
            orderObject.totalAmount = order.products.reduce(
                (total, product) =>
                    total + product.productId.price * product.quantity,
                0
            );
            return orderObject;
        });

        res.json(ordersWithTotalAmount);
    } catch (error) {
        res.status(500).json({
            message: 'Something went wrong when fetching the order!',
            error: error.message,
        });
    }
};
