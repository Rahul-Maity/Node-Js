const express = require('express');

const publicRouter = express.Router();
// publicRouter.param('user', (req, res, next, id) => {
//     req.user = id === '1' ? 'Admin' : 'Annonymus';
//     next();
// });
// const log = (req, res, next) => {
//     console.log('I am logging something');
//     next();
// }
// publicRouter.all('*', log);

publicRouter.param((param, option) => (req, res, next, val) => {
    if (val === option) {
        next();
    }
    else {
        res.sendStatus(403);
    }
    
});
publicRouter.param('user', '1');

publicRouter.get('/:user', (req, res) => {
    // res.send(`Hello ${req.user}`);
    res.send('Hello Admin');
    
});
publicRouter.get('/about', (req, res) => {
    res.send('public router about');
    
});
module.exports = publicRouter;

