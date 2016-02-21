var fs = require('fs');

var ls = function (path,flag){
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
}
exports.ls = ls;
