var parseString = require('xml2js').parseString;
var http = require("http");
var fs = require('fs');
var util = require('util');
var port = 8080;
var serverUrl = "0.0.0.0";

var date = Date();

//____________________________________________________________________________________________________________________________________________________________

// Read the API key from a secret file
var key = fs.readFileSync('weather_key.txt', 'utf8').trim();
var weatherFull = "";
// Variable with the weather URL
var weatherURL = 'http://api.wunderground.com/api/' + key + '/conditions/q/CA/San_Francisco.json';
var newsURL = 'http://feeds.yle.fi/uutiset/v1/recent.rss?publisherIds=YLE_NEWS';

/* // main weather array
var weather = [];
var getWeather = function ()
{
	// weather HTTP request
	setTimeout(getWeather, 3000000);
	var weatherRequest= http.get(
    	weatherURL,


    	function (response) {
	var temp = "";
        	response.setEncoding('utf8')
        	response.on('data', function(chunk) {
		
		temp = temp + chunk;
            	
	});
	response.on('end', function() {
		
            	weatherFull = JSON.parse(temp);
	
	});
    });

};
getWeather();
*/
//________________________________________________________________________________________________________________________________________________________________________
var newsFull = "";
var news = [];
var getNews = function ()
{
	setTimeout(getNews, 3000000);
	var newsRequest = http.get(
	newsURL,

	function (response) {
	var temp_II = "";
		response.setEncoding('utf8')
		response.on('data', function(chunk) {

		temp_II = temp_II + chunk;
	
	});
	response.on('end', function() {
	parseString(temp_II, function (err, result) {
 	newsFull = result // JSON.stringify(result);
	});


	//	
	});
	});
};
getNews();

//________________________________________________________________________________________________________________________________________________________________________

var server = http.createServer(function(req,res)
{
	res.writeHead(200, {"Content-Type": "text/html"});

        var response = 
            "Hello! <br /><br />" + 
            "The current time is " + date + "<br /><br />" +
     /*       "The current weather is " + weatherFull.current_observation.weather + " " + weatherFull.current_observation.temp_c + "&#8451;" + "<br /><br />" + */
            "The current news are " + newsFull.rss.channel.link
 + "<br /><br />"

	res.end(response)
});

console.log("Listening at " + serverUrl + ":" + port);
server.listen(port,serverUrl);
