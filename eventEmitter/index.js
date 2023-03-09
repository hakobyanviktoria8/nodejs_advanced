const EventEmitter = require("events");

const myEvent = new EventEmitter();

myEvent.on("event_name_here", () => {
  console.log("You are the best");
});

// if we have an argument
myEvent.on("event_emitter_with_argument", (arg) => {
  if (arg) {
    console.log("Event Emitter has argument", arg);
  }
});

myEvent.emit("event_name_here");
myEvent.emit("event_emitter_with_argument", 123);
