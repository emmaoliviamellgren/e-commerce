const express = require('express');
const path = require('path');
const fs = require('fs');

const PORT = process.env.PORT || 1234;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Prisma

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

app.get('/api/todos', async (req, res) => {
    try {
        const todos = await prisma.todo.findMany();
        res.json(todos);
        res.status(200).send(todos);
    } catch (error) {}
});
/*---------- 
    `res.json(todos)` is sending `todos` as a JSON response to the client (`.json()` is a method on the response object. It sends a JSON response to the client. This method converts the argument you pass to it into a JSON string using `JSON.stringify()`, then sets the `Content-Type` header to `application/json`, and sends that string as the body of the HTTP response.). This is typically used in a REST API where the client fetches data from the server. In this case, the client would be fetching a list of "to-do" items.
    
    `todos`: This is the argument you're passing to the `.json()` method. It should be an object or array that will be converted into a JSON string.
    ----------*/

app.post('/api/todos', async (req, res) => {
    try {
        const { title } = req.body;

        const todo = await prisma.todo.create({
            data: {
                title,
            },
        });

        res.status(200).json(todo); // We want to respond back with the data that we just saved into the database.
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.delete('/api/todos/:id', async (req, res) => {
    try {
        
        const { id } = req.params;
        const deleteTodo = await prisma.todo.delete({
            where: {
                id,
            },
        });

        res.status(200).json(deleteTodo);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Mongoose

const mongoose = require('mongoose');

mongoose
    .connect(
        'mongodb+srv://mellgrenemma0:testing123@emmasdatabase.oqfdtk2.mongodb.net/Node-API?retryWrites=true&w=majority&appName=EmmasDatabase'
    )
    .then(() => {
        console.log('Successfully connected to MongoDB!');
        app.listen(PORT, () =>
            console.log('Server is running on: http://localhost:' + PORT)
        );
    })
    .catch((error) => console.log('Could not connect to MongoDB: ' + error));
