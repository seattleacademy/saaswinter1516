var http = require('http');
var fs = require('fs');
if (process.argv[2] == undefined || process.argv[3] == undefined){
  console.error("USAGE: fileserver [PORT] [FILEPATH]");
  throw "No Arguments exception";
}
var server = http.createServer((req,res)=>{
  var data;
  var stream = fs.createReadStream(process.argv[3]);
  stream.on('data',function(chunk){
    data += chunk;
  });
  stream.on('end',function(){
    res.end(data.replace("undefined",""));
  });
}).listen(process.argv[2]);
