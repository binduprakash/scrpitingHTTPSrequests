var https = require('https');
module.exports = function getHTML (options, callback) {
  /* Your code here */
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
