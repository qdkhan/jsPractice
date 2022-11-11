const EventEmitter = require('events');

const event = new EventEmitter();

event.on("saymyname", (responce, msg)=> {
    console.log(`Your status code is ${responce} and message is ${msg}`);
    // console.log('Hello');
})
event.emit("saymyname", 200, 'Ok')