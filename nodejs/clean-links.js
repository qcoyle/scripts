var fs = require("fs");

function run(file, substring) {
    var substringLength = substring.length;
    if (substringLength == 0) {
        return [];
    }
    var startIndex = 0,
        index, indicies = [];

    while ((index = file.indexOf(substring, startIndex)) > -1) {
        file = file.substr(0, index) + file.substr(index + substring.length)
            // console.log(file)
    }
    return file;
}

fs.readFile('files/index.html', encoding = "utf8", function(err, data) {
    if (err) throw err;

    console.log(run(data, "https://www.google.com/url?q="))
});