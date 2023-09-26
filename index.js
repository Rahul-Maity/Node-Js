/*
const path = require('path')
const mypath='D:/Node Js/lord.js'
console.log(path.basename(mypath))
console.log(path.dirname(mypath))
console.log(path.parse(mypath))


const os = require('os');
console.log(os.platform())
console.log(os.cpus())


const fs = require('fs');
fs.writeFileSync('myfile.txt', 'Hello Programmers');
fs.appendFileSync('myfile.txt', 'How are you?');
const data = fs.readFileSync('myfile.txt');
fs.readFile('myfile.txt', (err, data) => {
    console.log(data.toString());
})
console.log('hello')
*/
const School=require('./school')
const EventEmitter=require('events')
const emmiter = new EventEmitter();

//listning to an event


const school = new School();
school.on('bellring', ({period,text}) => {
    console.log(`We need to go home beacause ${period} ${text}`);
});
school.startPeriod();

