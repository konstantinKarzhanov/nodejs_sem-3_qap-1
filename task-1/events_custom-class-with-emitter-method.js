// "events" module allows us to create custom events making it easier to build interactive and responsive applications

// Import the "events" module to extend the EventEmitter class
const EventEmitter = require("events");

// Create a custom event emitter class that extends the EventEmitter class
class CustomEmitter extends EventEmitter {
  // Define a custom method to emit events
  customEmmiter(eventName, id) {
    // Emit an event with a specified name and data
    this.emit(eventName, { id: id, data: "can be any data" });
  }
}

// Export the CustomEmitter class to make it available for use in other modules
module.exports = CustomEmitter;
