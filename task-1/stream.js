// "stream" module allows us to work with data in a more efficient and memory-friendly way. With streams we can read/write data incrementally (in chunks) rather than loading the entire data into memory in one time

// Import required functions from "fs" and "path" modules
const { createReadStream, createWriteStream } = require("fs");
const { join } = require("path");

// Define files to read/write data
const FILE_TO_READ = "stream-large-data-file.txt";
const FILE_TO_WRITE = "copy-stream-large-data-file.txt";

// Initialize a counter to keep track of data chunks
let chunckCounter = 0;

// Create a read stream to read data from the source file
const readStream = createReadStream(join(__dirname, FILE_TO_READ), {
  encoding: "utf-8",
});

// Create a write stream to write data to the destination file
const writeStream = createWriteStream(join(__dirname, FILE_TO_WRITE));

// Event handler when data is read from the source file
readStream.on("data", (dataChunk) => {
  chunckCounter++;
  console.log(`Chunk of data was read from the "${FILE_TO_READ}"`);

  // Another way to write data to the destination file
  // writeStream.write(dataChunk);
});

// Event handler when reading from the source file is complete
readStream.on("end", () => {
  console.log(
    `Reading is complete.\nTotal number of data chunks: ${chunckCounter}`
  );

  // Uncomment next line if you use "writeStream.write(dataChunk)" to end the write stream
  // writeStream.end("\n\nend of the file\n");
});

// Event handler when writing to the destination file is complete
writeStream.on("finish", () => {
  console.log(`Writing is complete`);
});

// Event handlers for read/write stream errors
readStream.on("error", (err) => console.log(`Error: ${err}`));
writeStream.on("error", (err) => console.log(`Error: ${err}`));

// Pipe the data from the read stream to the write stream
readStream.pipe(writeStream);
