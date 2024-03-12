const app = require('./app')
require('dotenv').config()

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const PORT = process.env.PORT || 3333
const MONGOURI = process.env.MONGO_URI

const mongoose = require('mongoose');

mongoose
    .connect(MONGOURI)
    .then(() => {
        console.log('Successfully connected to MongoDB!');
        app.listen(PORT, () =>
            console.log('Server is running on: http://localhost:' + PORT)
        );
    })
    .catch((error) => console.log('Could not connect to MongoDB: ' + error));



// app.post('/api/todos', async (req, res) => {
//     try {
//         const { title } = req.body;

//         const todo = await prisma.todo.create({
//             data: {
//                 title,
//             },
//         });

//         res.status(200).json(todo); // We want to respond back with the data that we just saved into the database.
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// });

// app.delete('/api/todos/:id', async (req, res) => {
//     try {
        
//         const { id } = req.params;
//         const deleteTodo = await prisma.todo.delete({
//             where: {
//                 id,
//             },
//         });

//         res.status(200).json(deleteTodo);

//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// });