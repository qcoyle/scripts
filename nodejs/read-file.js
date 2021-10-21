const fs = require("fs");

fs.readFile('files/index.html', encoding = "utf8", function(err, data) {
    if (err) throw err;
    console.log(data);
});

// Alternate way using a separate callback function:
let readDataCallback = (err, data) => {
    if (err) {
        console.log(`Something went wrong: ${err}`);
    } else {
        console.log(`Provided file contained: ${data}`);
    }
};

fs.readFile('files/index.html', 'utf-8', readDataCallback);