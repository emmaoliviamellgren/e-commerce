// import mongoose from 'mongoose';
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    images: { type: Array, default: [] },
});

const Products = mongoose.model('Products', productSchema);

module.exports = Products;
