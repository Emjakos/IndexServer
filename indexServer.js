var http = require("http");
var fs = require('fs');
var port = 8080;
var serverUrl = "192.168.1.108";
var counter = 0;

var server = http.createServer(function(req,res)
{

	console.log("Request: " + req.url);
	var file = '.' + req.url;
	console.log("Read file. " + file);
	
	fs.readFile(file, function(err, text){
	console.log("readFile: " + text + ' ' + err);

	
	res.setHeader("Content-Type", "text/html");
	res.end(text);

	});

});

console.log("Listening at " + serverUrl + ":" + port);
server.listen(port,serverUrl);
