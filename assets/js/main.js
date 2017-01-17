function loadWeather() {
	// new variable to set up the request
	var weatherCall = new XMLHttpRequest(); 

	// Set up response options for what should happen once the response has sent
	weatherCall.onreadystatechange = function() {
  	if( weatherCall.readyState == XMLHttpRequest.DONE ) {
			if( weatherCall.status == 200 ) {
      	document.getElementById( "myDiv" ).innerHTML = weatherCall.responseText; // write out json to screen
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
 	weatherCall.open( "GET", "http://api.openweathermap.org/data/2.5/weather?q=London&APPID=af54bfdccb0b7152a2b0fe992444c7f5", true ); 
 	// Execute call
 	weatherCall.send();
}