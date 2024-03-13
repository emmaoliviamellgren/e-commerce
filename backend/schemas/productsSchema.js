// import mongoose from 'mongoose';
const mongoose = require('mongoose');

const productsSchema = new mongoose.Schema(
    {    
        name: { type: String, name: 'Hejsan'},
        price: Number,
        description: String,
        category: String,
        images: [{ type: String}],
    },
    {
        name: String,
        price: Number,
        description: String,
        category: String,
        images: String,
    }
);

const Products = mongoose.model('Products', productsSchema);

module.exports = Products;
