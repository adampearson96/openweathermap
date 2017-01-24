function loadWeather() {
  var citySearch = document.getElementById('cityName').value;
  var apiKey = "af54bfdccb0b7152a2b0fe992444c7f5";
  var apiString = "http://api.openweathermap.org/data/2.5/weather?q=" + citySearch + "&APPID=" + apiKey;

	// new variable to set up the request
	var weatherCall = new XMLHttpRequest(); 

	// Set up response options for what should happen once the response has sent
	weatherCall.onreadystatechange = function() {
    if( weatherCall.readyState == XMLHttpRequest.DONE ) {
	 		if( weatherCall.status == 200 ) {
        obj = weatherCall.responseText;
        data = JSON.parse(obj);
        document.getElementById( "weather_results" ).innerHTML = obj; // write out json to screen
        // Get the icon code for the weather type and store it
        var weatherIcon = data.weather[0].icon;
        // Create variable to use to get the icon url
        var imageString = "http://openweathermap.org/img/w/" + weatherIcon + ".png";
        // Time data is captured
        console.log(data.dt);
        // Weather (type, brief description, icon)
        console.log(data.weather[0].main);
        console.log(data.weather[0].description);
        console.log(imageString);
        // Temperature, Pressure, Humidity
        console.log(data.main.temp);
        console.log(data.main.pressure);
        console.log(data.main.humidity);
        // Wind Speed, Direction
        console.log(data.wind.speed);
        console.log(data.wind.deg);
        // Cloudiness (%)
        console.log(data.clouds.all);
        // rainfall (volume in last 3 hours)
        console.log(data.rain);
        // snowfall (volume in last 3 hours)
        console.log(data.snow);
        // Sunset, Sunrise, 
        console.log(data.sys.sunrise);
        console.log(data.sys.sunset);
        // country, city
        console.log(data.sys.country);
        console.log(data.name);

      }
    	else if( weatherCall.status == 400 ) {
        alert( 'There was an error 400' );
      }
    	else {
      	alert( 'something else other than 200 was returned' );
      }
    }
  };
  // Set Parameters to make the call
  weatherCall.open( "GET", apiString, true ) 
  // Execute call
	weatherCall.send();
  var weatherResults = weatherCall.responseText;
}