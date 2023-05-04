var fs = require("fs");

var writeStream = fs.createWriteStream("Hello.txt");
writeStream.write("Hi, JournalDEV Users. ");
writeStream.write("Thank You.");
writeStream.end();