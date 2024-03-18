const mongoose = require('mongoose');

const Order = require('../schemas/orderSchema');
const User = require('../schemas/userSchema');

exports.postOrder = async (req, res) => {
    try {
        // Check if user is logged in
        const user = await User.findOne({ token: req.user.token });

        if (user) {
            const { productId, quantity } = req.body;

            // Save the order to the database
            const postOrder = await Order.create({
                user: user._id,
                products: [
                    {
                        productId, quantity
                    }
                ]
            });

            res.status(201).json(postOrder);
        } else {
            throw new Error('Not logged in!');
        }
    } catch (error) {
        console.log(error)
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

        const populatedOrder = await Order.findById(req.params.id).populate(
            'products.productId'
        );

        res.json(populatedOrder);
    } catch (error) {
        res.status(500).json({
            message: 'Something went wrong when fetching the order!',
        });
    }
};
