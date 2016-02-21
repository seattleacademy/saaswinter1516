var http = require('http');
if (process.argv[2] == undefined){
  console.error("please provide a second argument");
}
var port = process.argv[2];
var server = http.createServer((req,res)=>{
  if (req.method == "GET"){
        if(req.url.includes("/api/parsetime")&& req.url.includes("iso")){
            var parsedStr = parseRequestUrl(req.url);
            var d = new Date(parsedStr);
            var obj = new Object();
            obj.hour = d.getHours();
            obj.minute = d.getMinutes();
            obj.second = d.getSeconds();
            res.writeHead(200, {"Content-Type":"application-json"});
            res.end(obj);
        }else if(req.url.includes("/api/unixtime" && req.url.includes("iso"))){
          var parsedStr = parseRequestUrl(req.url);
          var obj2 = new Object();
          obj2.unixtime = Date.parse(parseRequestUrl(req.url));
          res.writeHead(200, {"Content-Type":"application-json"});
          res.end(obj);
        }else {
          console.error("invalid request");
        }
  }else {
    res.end("Invalid Request");
  }
});
function parseRequestUrl(string){
  var regex1 = /iso=|[(\.)]/g
  var regex2 = /[(.)]|[(T)]/g
  newstring = string.split(regex1)[1];
  return newstring.replace(regex2, " ");
}
