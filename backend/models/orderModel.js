const mongoose = require('mongoose');

const Order = require('../schemas/orderSchema');
const User = require('../schemas/userSchema');

exports.postOrder = async (req, res) => {
    const { user, products } = req.body;

    if (!mongoose.isValidObjectId(user)) {
        return res.status(400).json({
            message: 'Invalid user!',
        });
    }

    try {
        const postOrder = await Order.create({
            user,  // Save the user's ID with the order,
            products,
        });

        res.status(201).json(postOrder);
    } catch (error) {
        res.status(500).json({
            message: 'Something went wrong when creating the order!',
        });
    }
};

// Orderhistorik: Användaren ska kunna hämta alla sina tidigare lagda ordrar genom att göra en GET och skicka med en Bearer token.

exports.fetchOrder = async (req, res) => {
    try {
        if (!mongoose.isValidObjectId(req.params.id)) {
            res.status(400).json({ message: 'ObjectId not valid' });
            throw Error;
        }

        // const authHeader = req.headers['authorization'];

        // const token = authHeader && authHeader.split(' ')[1];

        // if(!token) return res.status(401).send('Access unauthorized');

        const orders = await Order.find({ user: req.params.id }).populate(
            'products.productId'
        );

        res.json(orders);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Something went wrong when fetching the order!',
        });
    }
};
