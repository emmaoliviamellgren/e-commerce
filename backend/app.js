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

//När vi gå in på denna api-url, vill jag använda denna controller
app.use('/api/users', userControllers);
app.use('/api/products', productControllers);

module.exports = app;