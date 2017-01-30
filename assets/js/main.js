function hideFields() {
  "use strict";
  document.getElementById( "primary_weather_results" ).style.display = "none";
  document.getElementById( "secondary_weather_results" ).style.display = "none";
  document.getElementById( "error_message" ).style.display = "none";
  document.getElementById( "city_search_form" ).addEventListener( 'submit', 
    function(event) {
      event.preventDefault();
    }
  );
}
function loadWeather() {
  "use strict";
  var citySearch = document.getElementById('cityName').value;
  var apiKey = "af54bfdccb0b7152a2b0fe992444c7f5";
  var apiString = "http://api.openweathermap.org/data/2.5/weather?q=" + citySearch + "&units=metric" + "&APPID=" + apiKey;
  // new variable to set up the request
  var weatherCall = new XMLHttpRequest(); 
  // Set up response options for what should happen once the response has sent
  weatherCall.onreadystatechange = function() {
    if( weatherCall.readyState == XMLHttpRequest.DONE ) {
	 		if( weatherCall.status == 200 ) {
        document.getElementById( "error_message" ).style.display = "none";
        document.getElementById( "primary_weather_results" ).style.display = "block";
        document.getElementById( "secondary_weather_results" ).style.display = "block";
        // Get response from API call
        var obj = weatherCall.responseText;
        // Parse JSON
        var data = JSON.parse(obj);
        // Create Weather Variables
        var weatherTime = new Date( data.dt * 1000 ); // Time weather data was taken
        var weatherType = data.weather[0].main; // Weather Type (e.g. Sunny)
        var weatherDescription = data.weather[0].description; // Weather Description (e.g. A few clouds)
        var weatherIcon = '<img src="http://openweathermap.org/img/w/' + data.weather[0].icon + '.png" />'; // Weather Icon
        var weatherTemperature = data.main.temp + "&#8451"; // Temperature (e.g. 2.1, Celcius)
        var weatherPressure = data.main.pressure + " hPa"; // Atmospheric Pressure (hPa)
        var weatherHumidity = data.main.humidity + "%"; // Humidity (%)
        var weatherWindSpeed = data.wind.speed; // Wind Speed (Defaults to meters/second)
        var weatherWindDirection = data.wind.deg + " degrees"; // Wind Direction (degrees, meteorological)
        var weatherCloudiness = data.clouds.all + "%"; // Cloudiness (%)
        var weatherRainfall = data.rain; // Rain volume in the last 3 hours
        var weatherSnowfall = data.snow; // Snow volume in the last 3 hours
        var weatherSunrise = new Date( data.sys.sunrise * 1000 ); // Sunrise (GMT)
        var weatherSunset = new Date( data.sys.sunset * 1000 ); // Sunset (GMT)
        var city_and_country = data.name + ", " + data.sys.country; // City Name, Country Code (e.g. Leeds, GB)
        document.getElementById( "weather_time" ).innerHTML = weatherTime;
        document.getElementById( "weather_icon" ).innerHTML = weatherIcon;
        document.getElementById( "weather_temperature" ).innerHTML = weatherTemperature;
        document.getElementById( "weather_type" ).innerHTML = weatherType;
        document.getElementById( "weather_city" ).innerHTML = city_and_country;
        document.getElementById( "weather_description" ).innerHTML = weatherDescription;
        document.getElementById( "weather_pressure" ).innerHTML = weatherPressure;
        document.getElementById( "weather_humidity" ).innerHTML = weatherHumidity;
        document.getElementById( "weather_wind_speed" ).innerHTML = weatherWindSpeed;
        document.getElementById( "weather_wind_direction" ).innerHTML = weatherWindDirection;
        document.getElementById( "weather_cloudiness" ).innerHTML = weatherCloudiness;
        document.getElementById( "weather_rainfall" ).innerHTML = weatherRainfall;
        document.getElementById( "weather_snowfall" ).innerHTML = weatherSnowfall;
        document.getElementById( "weather_sunrise" ).innerHTML = weatherSunrise;
        document.getElementById( "weather_sunset" ).innerHTML = weatherSunset;
      }
    	else if( weatherCall.status == 400 ) {
        document.getElementById( "error_message" ).innerHTML = "Uh oh. Something has gone wrong on our end. Please try again later, or alternatively contact a system administrator.";
        document.getElementById( "error_message" ).style.display = "block";
        document.getElementById( "primary_weather_results" ).style.display = "none";
        document.getElementById( "secondary_weather_results" ).style.display = "none";
      }
    	else {
      	document.getElementById( "error_message" ).innerHTML = "Oops, we were unable to find the weather for that region. Please enter a new city name or post code.";
        document.getElementById( "error_message" ).style.display = "block";
        document.getElementById( "primary_weather_results" ).style.display = "none";
        document.getElementById( "secondary_weather_results" ).style.display = "none";
      }
    }
  };
  // Set Parameters to make the call
  weatherCall.open( "GET", apiString, true );
  // Execute call
	weatherCall.send();
}