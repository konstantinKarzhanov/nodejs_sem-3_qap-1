// "fs" module provides us tools for interacting with file system.
// With this module we can read, write, delete, rename files and working with directories.
// In general "fs" allows us to perform various file-related operations.

// Import required functions from the "fs/promises" and"'path" modules
const {
  mkdir,
  writeFile,
  readFile,
  appendFile,
  copyFile,
  rename,
  rm,
  unlink,
} = require("fs/promises");
const { join } = require("path");

// Define the directory name, file name, and file path
const dirName = "fs-test-files";
const fileName = "test-file.txt";
const path = join(__dirname, dirName, fileName);

// Create an asynchronous IIFE to perform file operations
(async () => {
  try {
    // Create a directory
    await mkdir(join(__dirname, dirName));
    console.log(`1. Directory "${dirName}" was created`);

    // Write data to a file
    await writeFile(
      path,
      `${"-".repeat(
        50
      )}\nThis file and data was created by fsPromises.writeFile()\n${"-".repeat(
        50
      )}`
    );
    console.log(`2. The data was written to the file "${fileName}"`);

    // Read data from the file
    let data = await readFile(path, { encoding: "utf-8" });
    console.log(`3. The data was read:\n\n${data}\n`);

    // Append data to the file
    await appendFile(
      path,
      `\n\nThis data was appended by fsPromises.appendFile()\n${"-".repeat(50)}`
    );
    console.log(`4. Additional data was added to the file "${fileName}"`);

    // Read data from the file again
    data = await readFile(path, { encoding: "utf-8" });
    console.log(`5. The data was read once again:\n\n${data}\n`);

    // Copy the file to the current directory with a new name
    await copyFile(path, join(__dirname, `copy-${fileName}`));
    console.log(
      `6. The file "${fileName}" was coppied to the current directory with the new name "copy-${fileName}"`
    );

    // Rename the initial file in the directory
    await rename(path, join(__dirname, dirName, `renamed-${fileName}`));
    console.log(
      `7. The initial file from the directory "${dirName}" was renamed to "renamed-${fileName}"`
    );

    // ----------------------------------------------------------------------------
    // Comment out next lines of code to see created directory and files in action
    // ----------------------------------------------------------------------------

    // Remove the directory and initial file in it
    await rm(join(__dirname, dirName), { recursive: true });
    console.log(
      `8. The directory "${dirName}" and "renamed-${fileName}" inside it was removed using "rm -r" command`
    );

    // Remove copy of the initial file
    await unlink(join(__dirname, `copy-${fileName}`));
    console.log(
      `9. The "copy-${fileName}" was removed from the current directory`
    );
  } catch (err) {
    console.log(`Error: ${err}`);
  }
})();
