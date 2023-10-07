const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send('This is home page');
})
app.post('/', (req, res) => {
    res.send('home page with post request');
})
app.listen(3000, () => {
    console.log('listning on port 3000');
})