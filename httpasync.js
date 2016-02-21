var http = require('http');
function chain(i){

  if (process.argv[i] == undefined){
    return;
  }
  http.get(process.argv[i],function(res,err){
      var contents = "";
      if(!err){
          res.on('data',function(data){
            contents += data.toString();
          });
        res.on('end',()=>{
          console.log(contents);
          if (contents[i+1] != undefined){
            chain(i+1);
          }
        });
      }else{
        cSonsole.log("error occurred");
        console.log(err.stack);
      }
  });
}
chain(2);
