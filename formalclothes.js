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
                    currentCondition = value.current_condition[0].weatherDesc[0].value,
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
                function sunnyweather(){
                    document.body.background = "clothes/background.jpg";
                }                
                function rainyweather(){
                    document.body.background = "clothes/rainybackground.jpg";
                }    
                function cloudyweather(){
                    document.body.background = "clothes/cloudybackground.jpg";
                }
                function categorize(){
                    //decides what to wear when waterproof clothes are required...  heavy=cold
                    if (jQuery.inArray(weather, codesWaterproof) != -1) {
                        if (currentTemp > 50){
                            shoes = "medium";
                            top = "heavy";
                            bottom = "heavy";
                            rainyweather();
                            $('#maleshoes').append("<a href='http://www.espn.com' target='_blank'><img src='clothes/mens cold shoes.jpg' width='100%' height='100%'/></a>");
                            $('#maletop').append("<a href='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtSiBnId38zrcl10bqMEWM5NaZtvi4gnME34uXZZFUP3PtwVhx' target='_blank'><img src='clothes/mens cold shirt.jpg' width='100%' height='100%'/></a>");
                            $('#malebottom').append("<a href='http://www.espn.com' target='_blank'><img src='clothes/mens cold pants.jpg' width='100%' height='100%'/></a>");
                            $('#femaleshoes').append("<a href='http://www.espn.com' target='_blank'><img src='clothes/womens cold shoes.jpg' width='100%' height='100%'/></a>");
                            $('#femaletop').append("<a href='hhttp://www.backcountry.com/images/items/medium/HUR/HUR1120/CIN.jpg' target='_blank'><img src='clothes/womens cold shirt.jpg' width='100%' height='100%'/></a>");
                            $('#femalebottom').append("<a href='http://www.espn.com' target='_blank'><img src='clothes/womens cold pants.jpg' width='100%' height='100%'/></a>");
                        }
                        else {
                            shoes = "heavy";
                            top = "heavy waterproof";
                            bottom = "heavy";
                            
                            $('#maleshoes').append("<a href='http://www.espn.com' target='_blank'><img src='clothes/mens rainy shoes.jpg' width='150' height='150'/></a>");
                            $('#maletop').append("<a href='http://www.espn.com' target='_blank'><img src='clothes/mens rainy shirt.jpg' width='150' height='150'/></a>");
                            $('#malebottom').append("<a href='http://www.espn.com' target='_blank'><img src='clothes/mens rainy pants.jpg' width='150' height='150'/></a>");
                            $('#femaleshoes').append("<a href='http://www.espn.com' target='_blank'><img src='clothes/womens rainy shoes.jpg' width='150' height='150'/></a>");
                            $('#femaletop').append("<a href='http://www.espn.com' target='_blank'><img src='clothes/womens rainy shirt.jpg' width='150' height='150'/></a>");
                            $('#femalebottom').append("<a href='http://www.espn.com' target='_blank'><img src='clothes/womens rainy pants.jpg' width='150' height='150'/></a>");
                        }
                    }
                    else if (jQuery.inArray(weather, codesHeavy) != -1) {
                        shoes = "heavy";
                        top = "heavy";
                        bottom = "medium";
                        if (currentCondition="Partly Cloudy" || "Cloudy" || "Overcast"){
                                cloudyweather();
                            }
                            if (currentCondition= "Sunny" || "Clear"){
                                sunnyweather();
                            }
                        $('#maleshoes').append("<a href='http://www.espn.com' target='_blank'><img src='clothes/mens cold shoes.jpg' width='150' height='150'/></a>");
                        $('#maletop').append("<a href='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtSiBnId38zrcl10bqMEWM5NaZtvi4gnME34uXZZFUP3PtwVhx' target='_blank'><img src='clothes/mens cold shirt.jpg' width='150' height='150'/></a>");
                        $('#malebottom').append("<a href='http://www.espn.com' target='_blank'><img src='clothes/mens warm pants.jpg' width='150' height='150'/></a>");
                        $('#femaleshoes').append("<a href='http://www.espn.com' target='_blank'><img src='clothes/womens cold shoes.jpg' width='150' height='150'/></a>");
                        $('#femaletop').append("<a href='http://www.espn.com' target='_blank'><img src='clothes/womens cold shirt.jpg' width='150' height='150'/></a>");
                        $('#femalebottom').append("<a href='http://www.espn.com' target='_blank'><img src='clothes/womens warm pants.jpg' width='150' height='150'/></a>");
                    }
                    else if (jQuery.inArray(weather, codesMedium) != -1 ){
                        if (currentTemp > 50){
                            shoes = "medium";
                            top = "heavy";
                            bottom = "light";
                            if (currentCondition="Partly Cloudy" || "Cloudy" || "Overcast"){
                                cloudyweather();
                            }
                            if (currentCondition= "Sunny" || "Clear"){
                                sunnyweather();
                            }
                            if (currentCondition="Light rain shower" || "Patchy light rain in area with thunder" || "Light rain" || "Patchy light rain"){
                                rainyweather();
                            }
                            $('#maleshoes').append("<a href='http://www.espn.com' target='_blank'><img src='clothes/mens cold shoes.jpg' width='150' height='150'/></a>");
                            $('#maletop').append("<a href='http://windwoodtshirts.com/blank_long_sleeve_t-shirt_black.gif' target='_blank'><img src='clothes/mens warm shirt.jpg' width='150' height='150'/></a>");
                            $('#malebottom').append("<a href='http://www.espn.com' target='_blank'><img src='clothes/mens warm pants.jpg' width='150' height='150'/></a>");
                            $('#femaleshoes').append("<a href='http://www.espn.com' target='_blank'><img src='clothes/womens cold shoes.jpg' width='150' height='150'/></a>");
                            $('#femaletop').append("<a href='http://www.rei.com/zoom/vv/8bb96023-1608-4249-9b24-a7f556734b69.jpg/440' target='_blank'><img src='clothes/womens warm shirt.jpg' width='150' height='150'/></a>");
                            $('#femalebottom').append("<a href='http://www.espn.com' target='_blank'><img src='clothes/womens warm pants.jpg' width='150' height='150'/></a>");
                        }
                        else {
                            shoes = "medium";
                            top = "heavy";
                            bottom = "medium";
                            if (currentCondition="Partly Cloudy" || "Cloudy" || "Overcast"){
                                cloudyweather();
                            }
                            if (currentCondition= "Sunny" || "Clear"){
                                sunnyweather();
                            }
                            $('#maleshoes').append("<a href='http://www.espn.com' target='_blank'><img src='clothes/mens cold shoes.jpg' width='150' height='150'/></a>");
                            $('#maletop').append("<a href='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtSiBnId38zrcl10bqMEWM5NaZtvi4gnME34uXZZFUP3PtwVhx' target='_blank'><img src='clothes/mens cold shirt.jpg' width='150' height='150'/></a>");
                            $('#malebottom').append("<a href='http://www.espn.com' target='_blank'><img src='clothes/mens cold pants.jpg' width='150' height='150'/></a>");
                            $('#femaleshoes').append("<a href='http://www.espn.com' target='_blank'><img src='clothes/womens cold shoes.jpg' width='150' height='150'/></a>");
                            $('#femaletop').append("<a href='http://www.espn.com' target='_blank'><img src='clothes/womens cold shirt.jpg' width='150' height='150'/></a>");
                            $('#femalebottom').append("<a href='http://www.espn.com' target='_blank'><img src='clothes/womens cold pants.jpg' width='150' height='150'/></a>");
                        }
                    }
                    else if (jQuery.inArray(weather, codesLight) != -1 ){
                        if (currentTemp > 50 ){
                            shoes = "light";
                            top ="light";
                            bottom = "light";
                            if (currentCondition="Partly Cloudy" || "Cloudy" || "Overcast"){
                                cloudyweather();
                            }
                            if (currentCondition= "Sunny" || "Clear"){
                                sunnyweather();
                            }
                            $('#maleshoes').append("<a href='http://www.zappos.com/frye-james-penny-loafer-tan-smooth-full-grain?ef_id=UQQk1QAATasVRlo1:20130425193040:s' target='_blank'><img src='clothes/mens formal hot shoes.jpg' width='150' height='150'/></a>");
                            $('#maletop').append("<a href='http://www.rakuten.com/prod/ralph-lauren-men-s-single-breasted-2-button-navy-blue-wool-blazer/227217940.html?listingId=195095781' target='_blank'><img src='clothes/mens formal hot shirt.jpg' width='150' height='150'/></a>");
                            $('#malebottom').append("<a href='http://www.sears.com/haggar-men-s-classic-pleated-khaki-pants/p-041M5153000P?prdNo=34&blockNo=34&blockType=G34' target='_blank'><img src='clothes/mens formal hot pants.jpg' width='150' height='150'/></a>");
                            $('#femaleshoes').append("<a href='http://www.shoebuy.com/life-stride-parigi/599159/1232685' target='_blank'><img src='clothes/womens formal hot shoes.jpg' width='150' height='150'/></a>");
                            $('#femaletop').append("<a href='http://www.rakuten.com/prod/a-l-c-womens-erin-sleeveless-v-neck-knit-maxi-dress/248388353.html?listingId=279545638' target='_blank'><img src='clothes/womens formal hot dress.jpg' width='150' height='300'/></a>");
                        }
                        else {
                            shoes = "medium";
                            top ="medium";
                            bottom="medium";
                            if (currentCondition="Partly Cloudy" || "Cloudy" || "Overcast"){
                                cloudyweather();
                            }
                            if (currentCondition= "Sunny" || "Clear"){
                                sunnyweather();
                            }
                            $('#maleshoes').append("<a href='http://www.espn.com' target='_blank'><img src='clothes/mens warm shoes.jpg' width='150' height='150'/></a>");
                            $('#maletop').append("<a href='http://www.espn.com' target='_blank'><img src='clothes/mens warm shirt.jpg' width='150' height='150'/></a>");
                            $('#malebottom').append("<a href='http://www.espn.com' target='_blank'><img src='clothes/mens warm pants.jpg' width='150' height='150'/></a>");
                            $('#femaleshoes').append("<a href='http://www.espn.com' target='_blank'><img src='clothes/womens warm shoes.jpg' width='150' height='150'/></a>");
                            $('#femaletop').append("<a href='http://www.espn.com' target='_blank'><img src='clothes/womens warm shirt.jpg' width='150' height='150'/></a>");
                            $('#femalebottom').append("<a href='http://www.espn.com' target='_blank'><img src='clothes/womens warm pants.jpg' width='150' height='150'/></a>");
                        }
                    }
                }
                categorize();
                document.getElementById("totalPrecip").innerHTML = totalPrecip;
                document.getElementById("minTemp").innerHTML = minTemp;
                document.getElementById("maxTemp").innerHTML = maxTemp;
                document.getElementById("condition").innerHTML = condition;
                document.getElementById("currentTemp").innerHTML = currentTemp;
                document.getElementById("currentCondition").innerHTML = currentCondition;  
            });
        }
    });
});