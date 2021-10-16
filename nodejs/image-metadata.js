const filenames = require('./read-file-names.js');
var exif = require('exif').ExifImage;


var files = filenames;
console.log(1);
files.forEach((file) => {
    console.log(2);
    try {
        new exif({ image: `files/photos/${file}` }, function(err, data) {
            if (err) {
                console.log(err);
            } else {
                console.log(data);
            }
        });
    } catch (error) {
        console.log(error);
    }
})

console.log(3)