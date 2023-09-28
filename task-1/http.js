// "http" module allows us to create http servers and handle http requests and responses

// Import "createServer" function from the "http" module
const { createServer } = require("http");

// Define host, port and data for the "Not Found" page
const HOST = "localhost";
const PORT = 3000;
const NOT_FOUND_PAGE = "404: Not Found";

// Create map with url paths and their corresponding data
const pages = new Map([
  ["/", "Home"],
  ["/home", "Home"],
  ["/about", "About"],
  ["/contact", "Contact"],
]);

// Create http server using the "createServer" function
const server = createServer((req, res) => {
  // Set the response header to indicate the content type
  res.setHeader("Content-Type", "text/html");

  // Get the page data associated with the requested url path
  const data = pages.get(req.url) || NOT_FOUND_PAGE;

  // Set the http status code based on data
  res.statusCode = data != NOT_FOUND_PAGE ? 200 : 404;

  // Send data as response
  res.end(`<h1>${data} page</h1>`);

  // Display log's on server side
  console.log(
    `${req.method}: ${req.url}, ${res.statusCode}: ${res.statusMessage}`
  );
});

// Run the server and display info about the port it's listening on
server.listen(PORT, HOST, console.log(`Server is listening on port ${PORT}`));
