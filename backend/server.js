const app = require('./app')
require('dotenv').config()

const MONGOURI = process.env.MONGO_URI
const mongoose = require('mongoose');

mongoose
    .connect(MONGOURI)
    .then(() => {
        console.log('Successfully connected to MongoDB!');
    })
    .catch((error) => console.log('Could not connect to MongoDB: ' + error));

module.exports = app;

// const app = require('./app')
// require('dotenv').config()

// const PORT = process.env.PORT || 3333
// const MONGOURI = process.env.MONGO_URI

// const mongoose = require('mongoose');

// mongoose
//     .connect(MONGOURI)
//     .then(() => {
//         console.log('Successfully connected to MongoDB!');
//         app.listen(PORT, () =>
//             console.log('Server is running on: http://localhost:' + PORT)
//         );
//     })
//     .catch((error) => console.log('Could not connect to MongoDB: ' + error));