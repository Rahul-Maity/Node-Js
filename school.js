
const EventEmitter=require('events')
const emmiter = new EventEmitter();
class School extends EventEmitter{

    startPeriod() {
        console.log('class started');

        //raising an event of index.js file 
        setTimeout(() => {
            this.emit('bellring', {
                period: 'first',
                text:'period ended'
            });    
        }, 2000);
    }
}

module.exports = School;