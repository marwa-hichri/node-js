var fs = require("fs");

function readData(err, data) {
	  console.log(data);
}

fs.readFile('Hello.txt', 'utf8', readData);