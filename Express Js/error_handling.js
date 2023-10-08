const express = require('express');
const app = express();

app.get('/', (req, res) => {
    for (let i = 0; i <= 10; i++){
        if (i === 5) {
            next('There was a problem!');
        }
        else {
            
            res.write('a');
        }
    }
    res.end();
   
});
//404 handler
app.use((req, res, next) => {
    res.status(404).send('Requested url is not found');
});
app.use((err, req, res, next) => {
    if (res.headersSent) {
        next('There was a problem!');
    }
    else {
        
        if (err.message) {
            res.status(500).send(err.message);
        }
        else {
            res.status(500).send('There was an error');
        }
    }
});
app.listen(3000, () => {
    console.log('Listning at port 3000');
});