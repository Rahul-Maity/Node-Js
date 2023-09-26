const http=require('http')
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        
        res.write('Hello nep');
        res.end();
    }
    else if(req.url==='/about')
    {
        res.write('You are in the about page');
        res.end();
    } else {
        res.write('not found');
        res.end();
        
    }
});

// server.on('connection', () => {
//     console.log('new connection');
// });
server.listen(3000)
console.log('listening on port 3000')