const events = require('events');
const eventEmitter = new events.EventEmitter();

// creating an event handler

const chitkarDibo = () => {
    console.log("oi beta koy tui?? ami darai achi.");
    
}

// assign the handler into an event 
eventEmitter.on('screen', chitkarDibo).chitkarDibo

// firing the event 
eventEmitter.emit('screen'); 