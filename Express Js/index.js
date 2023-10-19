const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());
//database connection with mongoose
mongoose.connect('mongodb://localhost/todos')
    .then(() => console.log('connection successfull'))
    .catch(err => console.log(err));

//default error handler
function errorHandler(err, req, res, next) {
    if (res.headersSent) {
        return next(err);
    }
    res.status(500).json({ error: err });
}


app.listen(3000, () => {
    console.log('Listning to the port no 3000');
});