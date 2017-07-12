var http = require("http");
var fs = require('fs');
var port = 8080;
var serverUrl = "0.0.0.0"

var fetchWeather = 
function()
{
return http.get({
host: 'api.wunderground.com'
path: '/api/3d903c70641c080b/conditions/q/CA/San_Francisco.json'

}
	

var date = Date()
var weather = fetchWeather()
var news = ""

var server = http.createServer(function(req,res)
{
	
	res.writeHead(200, {"Content-Type": "text/html"});

        var response = 
            "Hello! <br /><br />" + 
            "The current time is " + date + "<br /><br />" +
            "The current weather is " + weather + "<br /><br />" +
            "The current news are " + news + "<br /><br />"

	res.end(response)
});

console.log("Listening at " + serverUrl + ":" + port);
server.listen(port,serverUrl);
