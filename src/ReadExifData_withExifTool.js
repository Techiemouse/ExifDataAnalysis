var exif = require('exiftool');
var fs   = require('fs');

fs.readFile('dimage.jpg', function (err, data) {
    if (err)
        throw err;
    else {
        exif.metadata(data, ['-iso', '-apertureValue'], function (err, metadata) {
            if (err)
                throw err;
            else
                console.log(metadata);
        });
    }
});