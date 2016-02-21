var net = require('net');

var timeServer = net.createServer((socket)=>{
  var data;
  var d = new Date();
  console.log(d.getMonth().toString());
  data = d.getFullYear()+"-"+"0"+(d.getMonth()+1)+"-"+"0"+d.getDate()+" "+d.getHours()+":"+d.getMinutes();
  socket.end(data);
}).listen(process.argv[2]);
