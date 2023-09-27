// const fs = require('fs');

// const ourReadstream = fs.createReadStream(`${__dirname}/Bigdata.txt`);
// const ourWritestream = fs.createWriteStream(`${__dirname}/output.txt`);
// ourReadstream.on('data', (chunk) => {
//     ourWritestream.write(chunk);
// });

// ourReadstream.pipe(ourWritestream);
const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
    const myReadStream = fs.createReadStream(`${__dirname}/Bigdata.txt`, 'utf-8');
    myReadStream.pipe(res);
});
server.listen(3000);
console.log('Listning on port 3000');