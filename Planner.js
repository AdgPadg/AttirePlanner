/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


$( document ).ready( function(){
    //Creates variables that will be used throughout the program
    var shoes = null, //open, closed, or waterproof
        bottom = null, //light, medium, heavy
        top = null, //water
        hat = null,
        extra = null;
    $.ajax({
        url: "http://free.worldweatheronline.com/feed/weather.ashx?q=Harrisonburg%2C+Va%2CUSA&format=json&num_of_days=1&key=9f32aa67e5174729132002",
        dataType: 'jsonp',  // Use 'jsonp' because it is cross domain request 
        //If the JSON loads correctly, do function
        success: function(data) {
            //??
            $.each(data, function(index, value) {
                //sets variables that will be useful for the code
                var coverage = value.current_condition[0].cloudcover,
                    totalPrecip = value.weather[0].precipMM,
                    minTemp = value.weather[0].tempMinF,
                    maxTemp = value.weather[0].tempMaxF,
                    avgTemp = (minTemp+maxTemp)/2,
                    wind = value.weather[0].windspeedMiles,
                    weather = value.weather[0].weatherCode,
                    condition = value.weather[0].weatherDesc[0].value;
                    
                //Groups the Weather Description into categories
                function categorize(){
                    //decides what to where when waterproof clothes are required
                    if (weather === 179 || 182 || 185 || 227 || 230 || 281 ||
                       284 || 299 || 302 || 305 || 308 || 311 || 314 || 317 || 
                       320 || 326 || 329 || 332 || 335 || 338 || 350 || 356 ||
                       359 || 362 || 365 || 368 || 371 || 374 || 377 || 389 ||
                       392 || 395 ){
                        shoes = "waterproof";
                        top = "waterproof";
                        bottom = "heavy";
                    }
                }
                    
                    
                //Decides on which shoes to wear
                function decideShoes(){
                    if (totalPrecip > 3){
                        shoes = "waterproof";
                    }
                    else if (totalPrecip <3 && avgTemp > 70){
                        shoes = "open";
                    }
                    else if (totalPrecip <3 && avgTemp < 70){
                        shoes = "closed";
                    }
                }
                
                //Decides on which bottoms to wear
                function decideBottom(){
                    if (totalPrecip > 3){
                        bottom = "waterproof";
                    } 
                    else if
                }
                
            });
        }
    });
});