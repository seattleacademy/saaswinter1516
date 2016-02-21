var fs = require ('fs');
(function(){
	fs.readFile(process.argv[2], function (err,data){
		if (err){console.log (err.stack);}
		else {
		var newlines = data.toString().split('\n');
		console.log(newlines.length-1);
		}
	});
})();
