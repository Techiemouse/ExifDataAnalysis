var ExifImage = require('exif').ExifImage;

try {
    new ExifImage({ image : 'dimage.jpg' }, function (error, exifData) {
        if (error)
            console.log('Error: '+error.message);
        else
       // var results = exifData;
            console.log(exifData); // Do something with your data!
    });
} catch (error) {
    console.log('Error: ' + error.message);
}