const Order = require('../schemas/orderSchema');
const User = require('../schemas/userSchema');

exports.postOrder = async (req, res) => {
    try {
        // Check if user is logged in
        const user = await User.findOne({ email: req.user.email });

        console.log(user);

        if (!user) return res.status(401).json({ message: 'Not logged in!' });

        const { productId, totalPrice } = await req.body;

        // Save the order to the database
        const postOrder = await Order.create({
            user: user._id,
            productId,
            totalPrice,
        });
        res.status(201).json(postOrder);
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong!' });
    }
};
