/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


$( document ).ready( function(){
    var weatherInfo = 'http://free.worldweatheronline.com/feed/weather.ashx?q=Harrisonburg%2C+Va%2CUSA&format=xml&num_of_days=1&key=9f32aa67e5174729132002';    
    
    //Gets the API Website and makes a function called xml
    $.get(weatherInfo,{},function(xml){
        //finds the weatherDesc tag. and says for eahc instance found, do function i
        $('weatherDesc',xml).each(function(i) {
            //sets the var windSpeed to the value provided by the API in mph
            var windSpeed = $(this).find("windspeedMiles").text();
            //If code is working, print the windSpeed to the console
            console.log(windSpeed);
        });
    });     
});