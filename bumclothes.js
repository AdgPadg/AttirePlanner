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
                    codesLight = [176, 143, 122, 119, 116, 113],
                    conSunny = ["Sunny", "Clear"],
                    conRainy = ["Light rain shower", "Patchy light rain in area with thunder", "Light rain",  "Patchy light rain"],
                    conCloudy = ["Partly Cloudy", "Cloudy", "Overcast"];
                    
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
                            if (jQuery.inArray(currentCondition, conCloudy) != -1) {
                            cloudyweather();
                            }
                            else if (jQuery.inArray(currentCondition, conSunny) != -1){
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
                                if (jQuery.inArray(currentCondition, conCloudy) != -1){
                                cloudyweather();
                                }
                                else if (jQuery.inArray(currentCondition, conCloudy) != -1){
                                sunnyweather();
                                }
                                else if (jQuery.inArray(currentCondition, conRainy) != -1){
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
                            if (jQuery.inArray(currentCondition, conCloudy) != -1){
                            cloudyweather();
                            }
                            else if (jQuery.inArray(currentCondition, conSunny) != -1){
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
                                if (jQuery.inArray(currentCondition, conCloudy) != -1){
                                cloudyweather();
                                }
                                else if (jQuery.inArray(currentCondition, conSunny) != -1){
                                sunnyweather();
                                }
                            $('#maleshoes').append("<a href='http://store.nike.com/us/en_us/?l=shop,pdp,ctr-inline/cid-1/pid-364180/pgid-438397' target='_blank'><img src='clothes/mens hot bum shoes.jpg' width='150' height='150'/></a>");
                            $('#maletop').append("<a href='http://store.nike.com/us/en_us/?l=shop,pdp,ctr-inline/cid-1/pid-647605/pgid-489504' target='_blank'><img src='clothes/mens hot bum shirt.jpg' width='150' height='150'/></a>");
                            $('#malebottom').append("<a href='http://store.nike.com/us/en_us/?l=shop,pdp,ctr-inline/cid-1/pid-523791/pgid-652784' target='_blank'><img src='clothes/mens hot bum pants.jpg' width='150' height='150'/></a>");
                            $('#femaleshoes').append("<a href='http://shop.nordstrom.com/s/rainbow-narrow-strap-sandal-women/2941416' target='_blank'><img src='clothes/womens hot bum shoes.jpg' width='150' height='150'/></a>");
                            $('#femaletop').append("<a href='http://www.thedealrack.com/p-2700-bella-ladies-37-oz-maxine-flowy-tank-top-b8800.aspx?cagpspn=pla&gclid=CJKr4ae95rYCFYef4AodtXQADQ' target='_blank'><img src='clothes/womens hot bum shirt.jpg' width='150' height='150'/></a>");
                            $('#femalebottom').append("<a href='http://www.dickssportinggoods.com/product/index.jsp?productId=12553523&gsidynamic=GooglePLA-_-WOMENSATHLETICAPPAREL-_-WOMENSATHLETICAPPAREL-_-SKU-12115833&camp=CSE:GooglePLA:12553523:12115833:WOMENSATHLETICAPPAREL-' target='_blank'><img src='clothes/womens hot bum pants.jpg' width='150' height='150'/></a>");
                        }
                        else {
                            shoes = "medium";
                            top ="medium";
                            bottom="medium";
                                if (jQuery.inArray(currentCondition, conCloudy) != -1){
                                cloudyweather();
                                }
                                else if (jQuery.inArray(currentCondition, conSunny) != -1){
                                sunnyweather();
                                }
                            $('#maleshoes').append("<a href='http://store.nike.com/us/en_us/?l=shop,pdp,ctr-inline/cid-1/pid-364180/pgid-438397' target='_blank'><img src='clothes/mens warm shoes.jpg' width='150' height='150'/></a>");
                            $('#maletop').append("<a href='http://store.nike.com/us/en_us/?l=shop,pdp,ctr-inline/cid-1/pid-647605/pgid-489504' target='_blank'><img src='clothes/mens warm shirt.jpg' width='150' height='150'/></a>");
                            $('#malebottom').append("<a href='http://store.nike.com/us/en_us/?l=shop,pdp,ctr-inline/cid-1/pid-523791/pgid-652784' target='_blank'><img src='clothes/mens warm pants.jpg' width='150' height='150'/></a>");
                            $('#femaleshoes').append("<a href='http://www.espn.com' target='_blank'><img src='clothes/womens warm shoes.jpg' width='150' height='150'/></a>");
                            $('#femaletop').append("<a href='http://www.espn.com' target='_blank'><img src='clothes/womens warm shirt.jpg' width='150' height='150'/></a>");
                            $('#femalebottom').append("<a href='http://www.dickssportinggoods.com/product/index.jsp?productId=12553523&gsidynamic=GooglePLA-_-WOMENSATHLETICAPPAREL-_-WOMENSATHLETICAPPAREL-_-SKU-12115833&camp=CSE:GooglePLA:12553523:12115833:WOMENSATHLETICAPPAREL-' target='_blank'><img src='clothes/womens hot bum pants.jpg' width='150' height='150'/></a>");
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
