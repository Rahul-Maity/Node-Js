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
    await newTodo.save((err) => {
        if (err) {
            res.status(500).json({
                error: "There was a server side error"
            });
        }
        else {
            res.status(200).json({
                message: "Todo was inserted successfully"
            });
        }
    });
});
//POST ALL THE TODO
router.post('/all', async (req, res) => {
    
});
//POST ALL THE TODO
router.post('/all', async (req, res) => {
    
});
//PUT TODO
router.put('/:id', async (req, res) => {
    
});
//DELETE TODO
router.delete('/:id', async (req, res) => {
    
});

module.exports = router;