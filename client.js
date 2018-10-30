// require `request` and the Node `fs` (filesystem) module
var request = require('request');
var fs = require('fs');

request.get('https://sytantris.github.io/http-examples/future.jpg')               // Note 1
       .on('error', (err) => {                                   // Note 2
         throw err;
       })
       .on('response', (response) => {                           // Note 3
         console.log('Response Status Code: ', response.statusCode, '\nResponse Message: ', response.statusMessage, '\nContent Type: ', response.headers['content-type']);
       })
       //.on('pipe', () => {
        //console.log('Downloading image...');
       //})
       .pipe(fs.createWriteStream('./future.jpg'))

       .on('finish', () => {
          console.log('Download complete.');
        });


