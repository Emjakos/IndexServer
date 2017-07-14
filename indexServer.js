
var http = require("http");
var fs = require('fs');
var util = require('util');
var port = 8080;
var serverUrl = "0.0.0.0";

var date = Date();

// Read the API key from a secret file
var key = fs.readFileSync('weather_key.txt', 'utf8').trim();

// Variable with the weather URL
var weatherURL = 'http://api.wunderground.com/api/' + key + '/conditions/q/CA/San_Francisco.json';

// main weather array
var weather = [];

// weather HTTP request
var weatherRequest= http.get(
    weatherURL,
    function (response) {
        response.setEncoding('utf8')
        response.on('data', function(chunk) {
            weather.push(chunk);
	setTimeout("", 3000000)
	});

    });
for  
if(weather.length>1)
{
var weatherFull = JSON.parse(weather).response.termsofService;
}
else
{
var weatherFull = "No Weather Yet";
}
var news = "";

var server = http.createServer(function(req,res)
{
	res.writeHead(200, {"Content-Type": "text/html"});

        var response = 
            "Hello! <br /><br />" + 
            "The current time is " + date + "<br /><br />" +
            "The current weather is " + weatherFull + "<br /><br />" +
            "The current news are " + news + "<br /><br />"

	res.end(response)
});

console.log("Listening at " + serverUrl + ":" + port);
server.listen(port,serverUrl);
