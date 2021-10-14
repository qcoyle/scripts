const fs = require("fs");

// Everything is synchronous
var filenames = fs.readdirSync("./files/photos");
console.log("Hello world 1");
console.log(filenames); // Outputs an array of the file names
filenames.forEach((file) => {
    console.log(`File name is ${file}`);
});
console.log("Hello world 2");