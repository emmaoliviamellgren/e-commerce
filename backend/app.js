const express = require('express');
const cors = require('cors');
const app = express();

// For pinging the server to check if it is running
app.get('/api/health', (req, res) => {
	return res.status(200).send('Server is running!');
});

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
