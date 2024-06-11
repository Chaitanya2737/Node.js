const fs = require("fs");
const path = require("path");

// Define the file path relative to the current script's directory
const filePath = path.join(__dirname, "text.txt");

fs.writeFile(filePath, "hey there this is Chaitanya", (error) => {
  if (error) {
    console.error("Error writing to file:", error);
  } else {
    console.log("File 'text.txt' has been created successfully!");
  }
});
