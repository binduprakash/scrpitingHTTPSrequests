var https = require('https');
function getAndPrintHTML (options) {



  /* Add your code here */
  var buffer = '';
  https.get(options, function (response) {
    response.setEncoding('utf8');

    response.on('data', function (data) {
    buffer += ('Data:' + data + '\n');
  });

    response.on('end', function() {
    console.log(buffer);
  });

});

}
var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };
getAndPrintHTML(requestOptions);