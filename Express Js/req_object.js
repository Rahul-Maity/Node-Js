const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
app.use(express.json());
app.use(cookieParser());
const adminRoute = express.Router();
adminRoute.get('/dashboard', (req, res) => {
    console.log(req.originalUrl);
    console.log(req.baseUrl);
    res.send('We are in admin dashboard');
})
app.use('/admin', adminRoute);
app.get('/user/:id', (req, res) => {
    console.log(req.secure);
    /*
    console.log(req.cookies);
    console.log(req.params);
    console.log(req.protocol);
    console.log(req.method);
    console.log(req.hostname);
    console.log(req.path);
    console.log(req.originalUrl);
    */
    res.send('Hello Welcome to app');
})
app.post('/user', (req, res) => {
    console.log(req.accepts('json'));
    console.log(req.get('content-type'));
    // console.log(req.route);
    console.log(req.body);
    res.send('Hello world post');
})
app.listen(3000, () => {
    console.log('listning');
});