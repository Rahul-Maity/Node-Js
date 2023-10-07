const express = require('express');
const app = express();
/*
app.locals.title = 'My App';
app.get('/', (req, res) => {
    console.log(app.locals.title);
    res.send('This is home page now');
})

const admin = express();
app.get('/', (req, res) => {
    res.send('Welcome to application home');
})
admin.on('mount', (parent) => {
    console.log(parent);
})
admin.get('/dashboard', (req, res) => {
    res.send('Welcome to admin dashboard');
    console.log(admin.mountpath);
});
app.use('/admin', admin);
app.enable('case sensitive routing');
app.disable('case sensitive routing');
app.all('/about', (req, res) => {
    res.send('Welcome to application home');
})
app.param('id', (req, res, next, id) => {
    const user = {
        userId: id,
        name: 'India'
    };
    req.userDetails = user;
    next();
});
app.get('/user/:id', (req, res) => {
    console.log(req.userDetails);
    res.send('Welcome to app home');
})
*/
app.set('view engine', 'ejs');
app.route('/about/mission')
    .get((req, res)=> {
        res.render('pages/about');
    })
    .put((req, res)=> {
        res.send('Welcome to put');
    })
    .post((req, res)=> {
        res.send('Welcome to post ');
    })
app.listen(3000, () => {
    console.log('listning on port 3000');
});