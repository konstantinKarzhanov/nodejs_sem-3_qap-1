// Import required functions from modules
const express = require("express");
const { format } = require("date-fns");
const { v4: uuidv4 } = require("uuid");

const { existsSync } = require("fs");
const { mkdir, appendFile } = require("fs/promises");
const { join } = require("path");

// Define an Express application
const app = express();
const PORT = 3000;

// Define constants for log file configuration
const LOG_DIR = "logs";
const LOG_FILE = "server.log";
const DATE_FORMAT = "dd MMM yyyy, hh:mm:ss (aaa)";

// Define a function to log requests and responses
const getLog = (req, res) => {
  // Create a log entry
  const log = `${req.method}: ${req.url}, status: ${res.statusCode}`;
  console.log(log);
  saveLog(log);
};

// Define a function to save log to a file
const saveLog = async (log) => {
  const LOG_FILE_FORMAT = `${format(
    new Date(),
    `${DATE_FORMAT}`
  )}\t${uuidv4()}\t(${log})\n`;

  try {
    // Check if the log directory exists, and create it if it doesn't
    if (!existsSync(join(__dirname, LOG_DIR))) {
      await mkdir(join(__dirname, LOG_DIR));
      console.log(`-- "${LOG_DIR}" directory was created`);
    }

    // Append the log entry with a timestamp and a unique ID to the log file
    await appendFile(join(__dirname, LOG_DIR, LOG_FILE), LOG_FILE_FORMAT);
    console.log(`-- log was saved to "${LOG_FILE}"`);
  } catch (err) {
    console.log(`Error: ${err}`);
  }
};

// Route for the homepage
app.get("^/$|^/home(.html)?$", (req, res) => {
  res.sendFile(join(__dirname, "index.html"));
  getLog(req, res);
});

// Route for the about page
app.get("/about(.html)?", (req, res) => {
  res.sendFile(join(__dirname, "about.html"));
  getLog(req, res);
});

// Default route for handling 404 errors
app.get("/*", (req, res) => {
  res.status(404).sendFile(join(__dirname, "404.html"));
  getLog(req, res);
});

// Start the server and listen on the specified port
app.listen(PORT, console.log(`Server is listening on port ${PORT}`));
