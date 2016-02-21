var http = require('http');
var url = process.argv[2];
var collected = "";
var length = 0;
http.get(url, function(response, err){
  if (!err){
  response.on("data",(data)=>{
      collected += data.toString();
      length += data.toString().length;
    });
  response.on('end',()=>{
      console.log(length);
  		console.log(collected);
	});
  }else{ 
    console.log(err.stack);
  }
}); 