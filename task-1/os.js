// "os" module provides us with an access to information about the OS
// (platform, architecture, network interfaces etc.)

// Import functions from the "os" module
const {
  version,
  cpus,
  userInfo,
  networkInterfaces,
  totalmem,
  freemem,
  uptime,
} = require("os");

// Get information about the current system
console.log(`\n${version()}\n`);

// Get information about each logical CPU core
console.log(cpus());

// Get information about the currently effective user
console.log(userInfo());

// Get information about network interfaces
console.log(networkInterfaces());

// Get information about total amount of system memory in GB
console.log(`Total amount of RAM: ${totalmem() / 1024 ** 3}Gb`);

// Get information about free system memory
let freeMemory = freemem();

const memoryGB = Math.trunc(freeMemory / 1024 ** 3);

freeMemory = freeMemory % 1024 ** 3;
const memoryMB = Math.trunc(freeMemory / 1024 ** 2);

freeMemory = freeMemory % 1024 ** 2;
const memoryKB = Math.trunc(freeMemory / 1024);

const memoryB = freeMemory % 1024;

console.log(
  `Systems free memory: ${memoryGB}Gb, ${memoryMB}Mb, ${memoryKB}Kb and ${memoryB}b`
);

// Get the time that have elapsed since the system started or was last rebooted
let time = uptime();
const padZero = (num) => String(num).padStart(2, 0);

const days = Math.trunc(time / 86400);

time = time % 86400;
const hours = Math.trunc(time / 3600);

time = time % 3600;
const minutes = Math.trunc(time / 60);
const seconds = time % 60;

console.log(
  `System uptime: ${days} ${days > 1 ? "days" : "day"}, ${padZero(
    hours
  )}:${padZero(minutes)}:${padZero(seconds)}`
);
