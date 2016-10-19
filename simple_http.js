var apiKey = "7344c3c162569c60769874ffcd043892";
var idKey ="524901&APPID";
//document.getElementById("activate").onClick = getWeather;
//http://api.openweathermap.org/data/2.5/forecast/city?id=524901&APPID=1111111111

// Make the weather request
var getWeather = function() {
	//gettingData = true;
	var requestString = "http://api.openweathermap.org/data/2.5/forecast/city?id=" + idKey + "&APPID=" + apiKey;
	request = new XMLHttpRequest();
	request.onload = proccessResults;
	request.open("GET", requestString, true);
	request.send();

	//console.log(request.status);
	//console.log(request.statusText);
};

// Take the JSON results and display them
var proccessResults = function() {
	//console.log(this);
	document.getElementById('response').innerHTML += JSON.parse(this.responseText);
	var results = document.getElementById('response').innerHTML;
	console.log(results);
};