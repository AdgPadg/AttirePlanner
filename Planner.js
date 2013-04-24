$( document ).ready( function(){
    //Creates variables that will be used throughout the program
    var shoes = null, //will be set to either heavy, medium, or light
        bottom = null, //will be set to either heavy, medium, or light
        top = null, //will be set to either heavy waterproof, light waterproof,
                    //medium, or light.
        extra = null; //will be set to either scarf, hat, or umbrella.
    $.ajax({
        url: "http://free.worldweatheronline.com/feed/weather.ashx?q=Harrisonburg%2C+Va%2CUSA&format=json&num_of_days=1&key=9f32aa67e5174729132002",
        dataType: 'jsonp',  // Use 'jsonp' because it is cross domain request 
        //If the JSON loads correctly, do function
        success: function(data) {
            //??
            $.each(data, function(index, value) {
                //sets variables that will be useful for the code
                var coverage = value.current_condition[0].cloudcover,
                    iconURL = value.current_condition[0].weatherIconUrl[0].value,
                    todayIcon = value.weather[0].weatherIconUrl[0].value,
                    totalPrecip = value.weather[0].precipMM,
                    minTemp = value.weather[0].tempMinF,
                    maxTemp = value.weather[0].tempMaxF,
                    currentTemp = parseInt(value.current_condition[0].temp_F),
                    wind = value.weather[0].windspeedMiles,
                    weather = parseInt(value.weather[0].weatherCode),
                    condition = value.weather[0].weatherDesc[0].value,
                    codesWaterproof = [179 , 182 , 185 , 200 , 227 , 230 , 281 ,
                       284 , 299 , 302 , 305 , 308 , 311 , 314 , 317 , 
                       320 , 326 , 329 , 332 , 335 , 338 , 350 , 356 ,
                       359 , 362 , 365 , 368 , 371 , 374 , 377 , 389 ,
                       392 , 395],
                    codesHeavy = [386 , 353 , 323],
                    codesMedium = [296, 293, 266, 263],
                    codesLight = [176, 143, 122, 119, 116, 113];
                    //Appends the icon url into the HTML file.
                    $('#current-icon').append("<img src='" + iconURL +  "'/>");
                    $('#today-icon').append("<img src='" + todayIcon +  "'/>");  
                //Groups the Weather Description into categories
                function categorize(){
                    //decides what to wear when waterproof clothes are required...  heavy=cold
                    if (jQuery.inArray(weather, codesWaterproof) != -1) {
                        if (currentTemp > 50){
                            shoes = "medium";
                            top = "heavy";
                            bottom = "heavy";
                            $('#malebox').append("<img src='clothes/mens cold shoes.jpg' width='150' height='150'/>");
                            $('#malebox').append("<img src='clothes/mens cold shirt.jpg' width='150' height='150'/>");
                            $('#malebox').append("<img src='clothes/mens cold pants.jpg' width='150' height='150'/>");
                            $('#femalebox').append("<img src='clothes/womens cold shoes.jpg' width='150' height='150'/>");
                            $('#femalebox').append("<img src='clothes/womens cold shirt.jpg' width='150' height='150'/>");
                            $('#femalebox').append("<img src='clothes/womens cold pants.jpg' width='150' height='150'/>");
                        }
                        else {
                            shoes = "heavy";
                            top = "heavy waterproof";
                            bottom = "heavy";
                            $('#malebox').append("<img src='clothes/mens rainy shoes.jpg' width='150' height='150'/>");
                            $('#malebox').append("<img src='clothes/mens rainy shirt.jpg' width='150' height='150'/>");
                            $('#malebox').append("<img src='clothes/mens rainy pants.jpg' width='150' height='150'/>");
                            $('#femalebox').append("<img src='clothes/womens rainy shoes.jpg' width='150' height='150'/>");
                            $('#femalebox').append("<img src='clothes/womens rainy shirt.jpg' width='150' height='150'/>");
                            $('#femalebox').append("<img src='clothes/womens rainy pants.jpg' width='150' height='150'/>");
                        }
                    }
                    else if (jQuery.inArray(weather, codesHeavy) != -1) {
                        shoes = "heavy";
                        top = "heavy";
                        bottom = "medium";
                        $('#malebox').append("<img src='clothes/mens cold shoes.jpg' width='150' height='150'/>");
                        $('#malebox').append("<img src='clothes/mens cold shirt.jpg' width='150' height='150'/>");
                        $('#malebox').append("<img src='clothes/mens warm pants.jpg' width='150' height='150'/>");
                        $('#femalebox').append("<img src='clothes/womens cold shoes.jpg' width='150' height='150'/>");
                        $('#femalebox').append("<img src='clothes/womens cold shirt.jpg' width='150' height='150'/>");
                        $('#femalebox').append("<img src='clothes/womens warm pants.jpg' width='150' height='150'/>");
                    }
                    else if (jQuery.inArray(weather, codesMedium) != -1 ){
                        if (currentTemp > 50){
                            shoes = "medium";
                            top = "heavy";
                            bottom = "light";
                            $('#malebox').append("<img src='clothes/mens cold shoes.jpg' width='150' height='150'/>");
                            $('#malebox').append("<img src='clothes/mens warm shirt.jpg' width='150' height='150'/>");
                            $('#malebox').append("<img src='clothes/mens warm pants.jpg' width='150' height='150'/>");
                            $('#femalebox').append("<img src='clothes/womens cold shoes.jpg' width='150' height='150'/>");
                            $('#femalebox').append("<img src='clothes/womens warm shirt.jpg' width='150' height='150'/>");
                            $('#femalebox').append("<img src='clothes/womens warm pants.jpg' width='150' height='150'/>");
                        }
                        else {
                            shoes = "medium";
                            top = "heavy";
                            bottom = "medium";
                            extra = "none";
                            $('#malebox').append("<img src='clothes/mens cold shoes.jpg' width='150' height='150'/>");
                            $('#malebox').append("<img src='clothes/mens cold shirt.jpg' width='150' height='150'/>");
                            $('#malebox').append("<img src='clothes/mens cold pants.jpg' width='150' height='150'/>");
                            $('#femalebox').append("<img src='clothes/womens cold shoes.jpg' width='150' height='150'/>");
                            $('#femalebox').append("<img src='clothes/womens cold shirt.jpg' width='150' height='150'/>");
                            $('#femalebox').append("<img src='clothes/womens cold pants.jpg' width='150' height='150'/>");
                        }
                    }
                    else if (jQuery.inArray(weather, codesLight) != -1 ){
                        if (currentTemp > 50 ){
                            shoes = "light";
                            top ="light";
                            bottom = "light";
                            $('#malebox').append("<img src='clothes/mens hot shoes.jpg' width='150' height='150'/>");
                            $('#malebox').append("<img src='clothes/mens hot shirt.jpg' width='150' height='150'/>");
                            $('#malebox').append("<img src='clothes/mens hot pants.jpg' width='150' height='150'/>");
                            $('#femalebox').append("<img src='clothes/womens hot shoes.jpg' width='150' height='150'/>");
                            $('#femalebox').append("<img src='clothes/womens hot shirt.jpg' width='150' height='150'/>");
                            $('#femalebox').append("<img src='clothes/womens hot pants.jpg' width='150' height='150'/>");
                        }
                        else {
                            shoes = "medium";
                            top ="medium";
                            bottom="medium";
                            $('#malebox').append("<img src='clothes/mens medium shoes.jpg' width='150' height='150'/>");
                            $('#malebox').append("<img src='clothes/mens medium shirt.jpg' width='150' height='150'/>");
                            $('#malebox').append("<img src='clothes/mens medium pants.jpg' width='150' height='150'/>");
                            $('#femalebox').append("<img src='clothes/womens medium shoes.jpg' width='150' height='150'/>");
                            $('#femalebox').append("<img src='clothes/womens medium shirt.jpg' width='150' height='150'/>");
                            $('#femalebox').append("<img src='clothes/womens medium pants.jpg' width='150' height='150'/>");
                         }
                    }
                }
                categorize();
                document.getElementById("totalPrecip").innerHTML = totalPrecip;
                document.getElementById("minTemp").innerHTML = minTemp;
                document.getElementById("maxTemp").innerHTML = maxTemp;
                document.getElementById("condition").innerHTML = condition;
                document.getElementById("currentTemp").innerHTML = currentTemp;
            });
        }
    });
});