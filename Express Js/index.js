const express = require('express');
const app = express();
// app.use(express.json());
// app.use(express.raw());
// app.use(express.text());
app.use(express.urlencoded());
app.get('/', (req, res) => {
    res.send('This is home page');
})
app.post('/', (req, res) => {
    res.send('home page with post request');
    // console.log( req.body.toString());//<-parsing raw data octate string
    console.log(req.body);
})
app.listen(3000, () => {
    console.log('listning on port 3000');
})