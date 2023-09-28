// "process" module provides access to information and control over the current Node.js process
const process = require("process");

// Get the object containing the user environment information
console.log(process.env);

// Get the architecture of the CPU
console.log(process.arch);

// Get the platform on which Node.js is running
console.log(process.platform);

// Get the working directory of the current process
console.log(process.cwd());
