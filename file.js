file=require("fs");
//file name
file.readFile("server.js",function(err,data){
	console.log("reached here\n");
	if(err){
		console.log(err.stack);
		console.log("error spotted");
		return;
	}
	console.log(data.toString());
});
console.log("Ending");