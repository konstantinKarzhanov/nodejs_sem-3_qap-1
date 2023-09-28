// "path" provides utilities for working with file and directory paths
// we can easy combine, break down or normalize path ensuring that our code can handle paths in a different platforms

// Import the "path" module to work with file paths
const path = require("path");

// Get the file name with extension
const firstFile = path.basename("/tmp/myfile.html");
console.log(firstFile);

// Get the base name of a Windows file path
const secondFile = path.win32.basename("C:\\temp\\myfile.html");
console.log(secondFile);

// Get the directory name from a file path
console.log(path.dirname("/tmp/myfile.html"));

// Get the file extension from a file path
console.log(path.extname("/tmp/myfile.html"));

// Parse a file path into an object
console.log(path.parse(process.cwd()));

// Combine multiple path segments to create a new path
console.log(path.join(__dirname, "testDirName", "testFileName.txt"));
