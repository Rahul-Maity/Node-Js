const express = require('express');

const privateRouter = express.Router();
// privateRouter.get('/', (req, res) => {
//     res.send('private router home');
    
// });
// privateRouter.get('/about', (req, res) => {
//     res.send('private router about');
    
// });
privateRouter
    .route('/user')
    .all((req, res, next) => {
        console.log('Logging something');
        next();
    })
    .get((req, res) => {
        res.send('get');
    })
    .put((req, res) => {
        res.send('put');
    });
module.exports = privateRouter;

