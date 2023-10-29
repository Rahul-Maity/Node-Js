const express = require('express');

const todoSchema = require('../schema/todoSchema');
const mongoose = require('mongoose');
const Todo = new mongoose.model("Todo", todoSchema);

const router = express.Router();

//GET ALL THE TODOS
router.get('/', async (req, res) => {
    
});
//GET THE TODOS WITH ID
router.get('/:id', async (req, res) => {
    
});
//POST TODO
router.post('/', async (req, res) => {
    const newTodo = new Todo(req.body);
    await newTodo
        .save()
        .then(() => {
            res.status(200).json({ message: 'Todo created successfully' });
        })
        .catch((err) => {
            console.log(err.message);
            res.status(500).json({ err: 'Wrong on server side' });
        });
    
    
});
//POST ALL THE TODO
router.post('/all', async (req, res) => {
    const insertManyTodos = req.body;
    if (insertManyTodos) {
        try {
            const data = Todo.insertMany(insertManyTodos);
            res.status(200).json({ message: "Many data inserted" });
        } catch (error) {
            res.status(500).json({ err: "Error saving many data" });
        }
    }
});

//PUT TODO
router.put('/:id', async (req, res) => {
    
});
//DELETE TODO
router.delete('/:id', async (req, res) => {
    
});

module.exports = router;