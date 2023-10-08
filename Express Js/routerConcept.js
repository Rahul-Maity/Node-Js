const express = require('express');
const publicRouter = require('./publicRouter.js');
const privateRouter = require('./privateRouter.js');
const app = express();
app.use('/private', privateRouter);
app.use('/public', publicRouter);
app.listen(3000, () => {
    console.log('Listning on port 3000');
});