const express = require('express');
const app = express();
const adminRouter = express.Router();

/*
const loggerWrapper = (options) => {
    (req, res, next) {
        if (options.log) {
            console.log(
                `${new Date(Date.now()).toLocaleString}-${req.method} - ${req.protocol} - ${req.originalUrl} -${req.ip}`
            );
            next();
        }
        else {
            throw new Error('This is an error');
        }
    }
}
*/
const logger = (req, res, next) => {
    console.log(
        `${new Date(Date.now()).toLocaleString}-${req.method} - ${req.protocol} - ${req.originalUrl} -${req.ip}`
    );
    throw new Error('This is an error');
}
adminRouter.use(logger);
adminRouter.get('/dashboard', (req, res) => {
    res.send('dashboard');
})
app.use('/admin',adminRouter);
app.get('/about', (req, res) => {
    res.send('About');
});
const errorMiddleware = (err, req, res, next) => {
    console.log(err.message);
    res.status(500).send('There was a server side error');
}
adminRouter.use(errorMiddleware);
app.listen(3000, () => {
    console.log('Listning on port 3000');
});