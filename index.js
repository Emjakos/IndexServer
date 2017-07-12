var fetchWeather = 
function() 
{
console.log("ASD");

document.getElementById('weather').innerHtml = "HelloWorld";



http.get('api.wunderground.com/api/3d903c70641c080b/conditions/q/CA/San_Francisco.json')
	.success(function(data)
	{
	var weatherHtml;
	
	for (var item in data.items)
		{
		weatherHtml=weatherHtml+ item + '<br/>';
		}

	document.getElementById('weather').innerHtml = newsHtml;
	});		
	
	.error(function(data)
	{

	document.getElementById('news').InnerHtml= 'Could not fetch news';
	});
}		
