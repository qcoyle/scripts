var fs = require("fs");

function getIndicies(file, substring) {
    var substringLength = substring.length;
    if (substringLength == 0) {
        return [];
    }
    var startIndex = 0,
        index, indicies = [];

    console.log(file.indexOf(substring, startIndex))

    while ((index = file.indexOf(substring, startIndex)) > -1) {
        indicies.push(index);
        startIndex = index + substringLength
    }
    return indicies;
}

fs.readFile('files/index.html', encoding = "utf8", function(err, data) {
    if (err) throw err;
    // console.log(data);
    indicies = getIndicies(data, "https://www.google.com/url?q=");

});