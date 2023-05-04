var fs = require('fs');

 
// writeFile function with filename, content and callback function
fs.writeFile('welcome.txt', 'Hello Node', function (err) {
  if (err) throw err;
  console.log('done');
  console.log( __dirname );
});