const app = require('./app')
require('dotenv').config()

// const PORT = process.env.PORT || 3333
const MONGOURI = process.env.MONGO_URI
const SERVER = process.env.REACT_APP_SERVER

const mongoose = require('mongoose');

mongoose
    .connect(MONGOURI)
    .then(() => {
        console.log('Successfully connected to MongoDB!');
        app.listen(SERVER, () =>
            console.log('Server is running on: ' + SERVER)
        );
    })
    .catch((error) => console.log('Could not connect to MongoDB: ' + error));