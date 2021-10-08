#!/usr/bin/env node

var fs = require("fs");
const inquirer = require("inquirer");

function run(file, substring) {
    var startIndex = 0,
        index;

    while ((index = file.indexOf(substring, startIndex)) > -1) {

        file = removeHead(index, file, substring);
        file = removeEnd(index, file);
    }
    return file;
}

function removeHead(index, file, substring) {
    return (file.substr(0, index) + file.substr(index + substring.length));
}

function removeEnd(index, file) {
    startIndex = file.indexOf("&amp", index);
    endIndex = file.indexOf('"', startIndex);
    return file.substring(0, startIndex) + file.substring(endIndex);
}

var questions = [{
    type: 'input',
    name: 'name',
    message: "Enter file to clean (/Users/qtcoyle/Downloads/index.html)"
}];

inquirer.prompt(questions).then(answers => {
    console.log(`File entered is ${answers['name']}`)

    fs.readFile(answers['name'], encoding = "utf8", function(err, data) {
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
});