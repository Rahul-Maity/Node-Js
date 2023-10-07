const express = require('express');
const app = express();
// app.use(express.static(`./public/`, {
//     index:'home.html',
// }));

const router = express.Router({
    caseSensitive:true,
});
router.get('/', (req, res) => {
    res.send('This is home page');
})
router.post('/', (req, res) => {
    res.send('home page with post request');
    // console.log( req.body.toString());//<-parsing raw data octate string
    console.log(req.body);
})
app.listen(3000, () => {
    console.log('listning on port 3000');
})