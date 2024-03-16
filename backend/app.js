// För middleware och koppla ihop controllers

const express = require('express');
const app = express();

const path = require('path');
const fs = require('fs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Controllers
const userControllers = require('./controllers/userControllers')
const productControllers = require('./controllers/productControllers')
const messageControllers = require('./controllers/messageControllers')
const orderControllers = require('./controllers/orderControllers')

//När vi gå in på denna api-url, vill jag använda denna controller
app.use('/api/auth', userControllers);
app.use('/api/products', productControllers);
app.use('/api/message', messageControllers);
app.use('/api/order', orderControllers);


module.exports = app;