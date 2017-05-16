var http=require("http");
http.createServer(function(req,res){
	res.writeHead(200,{'content-type':'text/plain'});
	res.end("Server data.");
}).listen(8080);
console.log("Server started");