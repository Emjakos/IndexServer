url = require('url');
var parseString = require('xml2js').parseString;
var http = require("http");
var fs = require('fs');
var util = require('util');
var port = 8080;
var serverUrl = "0.0.0.0";
var mu = require('mu2');
var date = Date();

//____________________________________________________________________________CA_San_Francisco_______________________________________________________________________________

// Read the API key from a secret file
var key = fs.readFileSync('weather_key.txt', 'utf8').trim();
var weatherFull = "";
// Variable with the weather URL
var weatherURL = 'http://api.wunderground.com/api/' + key + '/conditions/q/FI/Helsinki.json';
var newsURL = 'http://feeds.yle.fi/uutiset/v1/recent.rss?publisherIds=YLE_NEWS';

// main weather array
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

//________________________________________________________________________________________________________________________________________________________________________
var newsFull = "";
var news = [];
var getNews = function ()
{
	setTimeout(getNews, 3000);

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
try{
  var request = url.parse(req.url, true);
  var action = request.pathname;

  if (action == '/cloudy.png') {
var imgstr = './Question.png'; 
  if (weatherFull.current_observation.weather == "Clear")
{
console.log("sunny");
imgstr = './sunny.png';
}
else if (weatherFull.current_observation.weather == "Partly Cloudy" || weatherFull.current_observation.weather == "Scattered Clouds")
{
console.log("peeking");
imgstr = './peeking.png';
}
else if (weatherFull.current_observation.weather == "Overcast" || weatherFull.current_observation.weather == "Mostly Cloudy")
{
console.log("cloudy");
imgstr = './cloudy.png';
}
else if (weatherFull.current_observation.weather == "Rain Showers" || weatherFull.current_observation.weather == "Rainy")
{
console.log("rainy")
imgstr = './rainy.png';
}

     var img = fs.readFileSync(imgstr);
     res.writeHead(200, {'Content-Type': 'image/png' });
     res.end(img, 'binary');
  } else { 
	res.writeHead(200, {"Content-Type": "text/html"});
	
	var stream = mu.compileAndRender('index.html', {weather: weatherFull, news: newsFull.rss.channel[0], time: date})
	//var indexHtml = fs.readFileSync("./index.html", "utf8")

	stream.pipe(res);
  }

}
catch(ex)
{
console.log("Exception " + ex.toString());
}
//________________________________________________________________________________________________________________________________________________________________________

        /*  "Hello! <br /><br />" + 
            "The current time is " + date + "<br /><br />" +
            "The current weather is " + weatherFull.current_observation.weather + " " + weatherFull.current_observation.temp_c + "&#8451;" + "<br /><br />" + 
            "The current news are <a href=\"" + newsFull.rss.channel[0].item[0].link + "\">"+ newsFull.rss.channel[0].item[0].title + "</a>" + "<br />" +
	    newsFull.rss.channel[0].item[0].description

 var JsonObject=
	{
		"Info": [
		{
		"date": date
		"weatherJSON": weatherFull.current_observation.weather
		"tempJSON": weatherFull.current_observation.temp_c
		"newsTitleJSON": newsFull.rss.channel[0].item[0].title 
		"newsDescJSON": newsFull.rss.channel[0].item[0].description
		};
*/
	//res.end(response)
});

console.log("Listening at " + serverUrl + ":" + port);
server.listen(port,serverUrl);