var http = require('http');
var url = process.argv[2];
http.get(url,function(response, err){
  if (!err){
  response.on("data",(data)=>{
      console.log(data.toString());
    });
  }else{
    console.log(err.stack);
  }
});
