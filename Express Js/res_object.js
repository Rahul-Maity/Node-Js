const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.get('/test', (req, res) => {
    res.send('Hello');
});
app.get('/about', (req, res) => {
  /* console.log(res.headersSent);
    res.render('pages/about', {
        name: 'India'
    });
     console.log(res.headersSent);
     
     res.json({
         name: 'India'
        });
        // res.sendStatus(200);
        res.format({
            'text/plain': () => {
                res.send('hi');
            },
            'text/html': () => {
                res.render('pages/about', {
                    name: 'India'
                });
            },
            'application/json': () => {
                res.json({
                    message: 'Hello'
                });
            },
            default: () => {
                res.status(406).send('Not acceptable');
            },
        });
        res.cookie('name', 'learnwithsumit');
        res.end();
        res.redirect('/test');
        res.end();
        */
    res.set('platform', 'Learn with sumit');
    console.log(res.get('platform'));
    res.end();
});
app.listen(3000, () => {
    console.log('listning to the the port 3000');
});