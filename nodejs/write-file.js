const fs = require('fs');

const myFile = "This is what I want to write to the file!";

fs.writeFile("/Users/qtcoyle/Downloads/js-write.txt", myFile, err => {
    if (err) {
        console.error(err);
        return;
    }
})