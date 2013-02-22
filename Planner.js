/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


$( document ).ready( function(){
    var weatherInfo = 'http://free.worldweatheronline.com/feed/weather.ashx?q=Harrisonburg%2C+Va%2CUSA&format=xml&num_of_days=1&key=9f32aa67e5174729132002';    
    
    //Gets the API Website and makes a function called xml
    $.get(weatherInfo,{},function(xml){
        $('weatherDesc',xml).each(function(i) {
            var windSpeed = $(this).find("windspeedMiles").text();
            console.log(windSpeed);
        });
    });     
});