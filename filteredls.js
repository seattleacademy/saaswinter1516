var fs = require('fs');
var path = process.argv[2];
var flag = process.argv[3];
fs.readdir(path, function(err,files){
	if(err){
	console.log(err.stack);
	}else {
		files.forEach((file)=>{
			if (file.includes('.'+flag)){
				console.log(file);
			}
		});
	}
});
