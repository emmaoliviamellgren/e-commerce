// För middleware och koppla ihop controllers

const express = require('express');
const app = express();

const path = require('path');
const fs = require('fs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Controllers
const usersControllers = require('./controllers/usersControllers')

//När vi gå in på denna url, vill jag använda denna controller
app.use('/api/users', usersControllers);

module.exports = app;