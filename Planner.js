$( document ).ready( function(){
    //Creates variables that will be used throughout the program
//    var var shoes = null, //will be set to either heavy, medium, or light
//        var bottom = null, //will be set to either heavy, medium, or light
//        top = null, //will be set to either heavy waterproof, light waterproof,
//                    //medium, or light.
//        extra = null; //will be set to either scarf, hat, or umbrella.
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
                    condition = value.weather[0].weatherDesc[0].value,
                    codesAll= [179 , 182 , 185 , 200 , 227 , 230 , 281 ,
                       284 , 299 , 302 , 305 , 308 , 311 , 314 , 317 , 
                       320 , 326 , 329 , 332 , 335 , 338 , 350 , 356 ,
                       359 , 362 , 365 , 368 , 371 , 374 , 377 , 389 ,
                       392 , 395 , 386 , 353 , 323 , 296 , 293 , 266 ,
                       263 , 176 , 143 , 122 , 119 , 116 , 113],
                    codesWaterproof = [179 , 182 , 185 , 200 , 227 , 230 , 281 ,
                       284 , 299 , 302 , 305 , 308 , 311 , 314 , 317 , 
                       320 , 326 , 329 , 332 , 335 , 338 , 350 , 356 ,
                       359 , 362 , 365 , 368 , 371 , 374 , 377 , 389 ,
                       392 , 395],
                    codesHeavy = [386 , 353 , 323],
                    codesMedium = [296 , 293 , 266 , 263],
                    codesLight = [176 , 143 , 122 , 119 , 116 , 113];
                    
                //Groups the Weather Description into categories
                function categorize(){
                    //decides what to where when waterproof clothes are required
                    if (JQuery.inArray(weather, codesWaterproof) != -1){
                        if (avgTemp > 50){
                            var shoes = "medium";
                            var top = "light waterproof";
                            var bottom = "heavy";
                        }
                        else {
                            var shoes = "heavy";
                            var top = "heavy waterproof";
                            var bottom = "heavy";
                            var extra = "umbrella ";
                        }
                    }
                    else if (JQuery.inArray(weather, codesHeavy) != -1){
                        var shoes = "heavy";
                        var top = "light waterproof";
                        var bottom = "medium";
                        var extra = "none";
                    }
                    else if (JQuery.inArray(weather, codesMedium) != -1){
                        if (avgTemp > 50){
                            var shoes = "medium";
                            var top = "light waterproof";
                            var bottom = "light";
                            var extra = "none";
                        }
                        else {
                            var shoes = "medium";
                            var top = "light waterproof";
                            var bottom = "medium";
                            var extra = "none";
                        }
                    }
                    else if(JQuery.inArray(weather, codesLight) != -1){
                        if (avgTemp > 50 ){
                            var shoes = "light";
                            var top ="light";
                            var bottom = "light";
                        }
                        else {
                            var shoes = "medium";
                            var top ="medium";
                            var bottom="medium";
                        }
                    }
                }
                document.getElementById("totalPrecip").innerHTML = totalPrecip;
                document.getElementById("minTemp").innerHTML = minTemp;
                document.getElementById("maxTemp").innerHTML = maxTemp;
                document.getElementById("condition").innerHTML = condition;
            });
        }
    });
});
