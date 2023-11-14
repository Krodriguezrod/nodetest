const EventEmitter = require ('events');

//make class
class MyEmitter extends EventEmitter {}

//init obj
const myEmitter = new MyEmitter();

//event listiner
myEmitter.on('event',()=>console.log('event happened'));

//run event
myEmitter.emit('event');
myEmitter.emit('event');myEmitter.emit('event');