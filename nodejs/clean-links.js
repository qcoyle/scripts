var fs = require("fs");

function run(file, substring) {
    var substringLength = substring.length;
    if (substringLength == 0) {
        return [];
    }
    var startIndex = 0,
        index, indicies = [];

    while ((index = file.indexOf(substring, startIndex)) > -1) {

        // Clean out head 
        file = file.substr(0, index) + file.substr(index + substring.length);

        // Clean out tail
        file = removeEnd(index, file);

    }
    return file;
}

function removeEnd(index, file) {
    startIndex = file.indexOf("&amp", index);
    endIndex = file.indexOf('"', startIndex);
    return file.substring(0, startIndex) + file.substring(endIndex);
}

fs.readFile('files/index.html', encoding = "utf8", function(err, data) {
    if (err) throw err;
    file = run(data, "https://www.google.com/url?q=");
    console.log(file);

    // Write out the file
    fs.writeFile("/Users/qtcoyle/Downloads/cleaned-links-index.html", file, err => {
        if (err) {
            console.error(err);
            return;
        }
    })
});