const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

// Controllers
const userControllers = require('./controllers/userControllers');
const productControllers = require('./controllers/productControllers');
const messageControllers = require('./controllers/messageControllers');
const orderControllers = require('./controllers/orderControllers');

app.use('/api/auth', userControllers);
app.use('/api/products', productControllers);
app.use('/api/messages', messageControllers);
app.use('/api/orders', orderControllers);

module.exports = app;
