var https = require('https');
function getHTML (options, callback) {



  /* Add your code here */
  var buffer = '';
  https.get(requestOptions, function (response) {
    response.setEncoding('utf8');

    response.on('data', function (data) {
    buffer += ('Data:' + data + '\n');
  });

    response.on('end', function() {
    callback(buffer);
  });

});

}
function printHTML (html) {
  console.log(html);
}
var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };
getHTML(requestOptions, printHTML);