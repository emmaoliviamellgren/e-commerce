const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: { type: String, required: [true, 'Email is required'], unique: [true, 'A user with this email already exists'] },
    password: { type: String, required: [true, 'Password is required'] }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
