// Import the CustomEmitter class from the local module "events_custom-class-with-emitter-method"
const CustomEmitter = require("./events_custom-class-with-emitter-method");

// Create an instance of the CustomEmitter class
const emitter = new CustomEmitter();

// Define event listeners for different events
emitter.on("firstEvent", (event) => {
  console.log(`"firstEvent" was just fired, id: ${event.id}`);
});

emitter.on("secondEvent", (event) => {
  console.log(`"secondEvent" was just fired, id: ${event.id}`);
});

emitter.on("thirdEvent", (event) => {
  console.log(`"thirdEvent" was just fired, id: ${event.id}`);
});

emitter.on("fourthEvent", (event) => {
  console.log(`"fourthEvent" was just fired, id: ${event.id}`);
});

// Emit custom events with associated data using the customEmitter method
emitter.customEmmiter("firstEvent", 1);
emitter.customEmmiter("secondEvent", 2);
emitter.customEmmiter("thirdEvent", 3);
emitter.customEmmiter("fourthEvent", 4);
