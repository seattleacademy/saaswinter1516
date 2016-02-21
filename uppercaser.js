var http = require('http');
var port = process.argv[2];
if (process.argv[2] == undefined){
  console.log("USAGE: uppercaser [PORT]");
  throw "ERROR: PORT UNDEFINED";
}
var server = http.createServer(function(req,res){
  var contents = "";
  if (req.method == "POST"){
  req.on('data', function(data){
    res.end(data.toString().toUpperCase());
  });
}
}).listen(port);
