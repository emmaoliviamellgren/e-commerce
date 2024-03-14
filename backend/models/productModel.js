const mongoose = require('mongoose');

const Products = require('../schemas/productSchema');

exports.postProduct = async (req, res) => {
    try {
        const { name, price, description, category, images } = req.body;

        const postProduct = await Products.create({
            name,
            price,
            description,
            category,
            images,
        });
        res.status(201).json(postProduct);
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong!' });
    }
};

exports.fetchAllProducts = async (req, res) => {
    try {
        const fetchAllProducts = await Products.find({});
        res.json(fetchAllProducts);
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong!' });
    }
};

exports.fetchProduct = async (req, res) => {
    try {
        if (!mongoose.isValidObjectId(req.params.id)) {
            res.status(400).json({ message: 'ObjectId not valid' });
            throw Error;
        }

        const fetchProduct = await Products.findById(req.params.id);
        res.json(fetchProduct);
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong!' });
    }
};

exports.updateProduct = async (req, res) => {
    try {
        if (!mongoose.isValidObjectId(req.params.id)) {
            res.status(400);
            throw new Error('ObjectId not vali');
        }

        const updatedProduct = await Products.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true
            }
        );
        res.json(updatedProduct);

    } catch (error) {
        res.status(500).json({ message: 'Something went wrong!' });
    }
};

exports.deleteProduct = async (req, res) => {
    try {
        if (!mongoose.isValidObjectId(req.params.id)) {
            res.status(400).json({ message: 'ObjectId not valid' });
            throw Error;
        }

        const deleteProduct = await Products.findByIdAndDelete(req.params.id);
        res.json(deleteProduct);
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong!' });
    }
};
