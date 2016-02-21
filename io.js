var fs = require('fs');

var newlines = fs.readFileSync(process.argv[2]).toString().split('\n');
console.log(newlines.length-1);

