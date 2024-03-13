const Products = require('../schemas/productsSchema');

//Vi vill exportera detta som en namngedd export

exports.fetchProducts = (req, res) => {};

exports.fetchProducts = async (req, res) => {
    try {
        const getUser = await User.find({});
        res.json(getUser);
        console.log(getUser);
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong!' });
    }
};
