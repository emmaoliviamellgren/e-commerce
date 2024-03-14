const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, required: [true, 'Name is required'] },
    price: { type: Number, required: [true, 'Price is required and must be of type number'] },
    description: { type: String, required: [true, 'Description is required'] },
    category: { type: String, required: [true, 'Category is required'] },
    images: { type: Array, default: [] },
});

const Products = mongoose.model('Products', productSchema);

module.exports = Products;
