const express = require('express');
const mongoose = require('mongoose');
const todoHandler = require('./routesHandler/todoHandler');
const app = express();
app.use(express.json());
//database connection with mongoose
mongoose.set('strictQuery', false);
mongoose.connect('mongodb://localhost:27017/TodoDatas')
    .then(() => console.log('connection successfull with db'))
    .catch(err => console.log(err));
 

//application routes
app.use('/todo', todoHandler);
//default error handler
function errorHandler(err, req, res, next) {
    if (res.headersSent) {
        return next(err);
    }
    res.status(500).json({ error: err });
}

//server listning
app.listen(3000, () => {
    console.log('Listning to the port no 3000');
});


