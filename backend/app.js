// För middleware och koppla ihop controllers

const express = require('express');
const app = express();

const path = require('path');
const fs = require('fs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Controllers
const usersControllers = require('./controllers/usersControllers')
const productsControllers = require('./controllers/productsControllers')

//När vi gå in på denna api-url, vill jag använda denna controller
app.use('/api/users', usersControllers);
app.use('/api/products', productsControllers);

module.exports = app;