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
        document.getElementById( "weather_results" ).innerHTML = weatherCall.responseText; // write out json to screen
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
}