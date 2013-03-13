/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


$( document ).ready( function(){
    //var weatherInfo = "http://free.worldweatheronline.com/feed/weather.ashx?q=Harrisonburg%2C+Va%2CUSA&format=json&num_of_days=1&key=9f32aa67e5174729132002";    

        function func(json){
          alert(json.name);
        }
        var elm = document.createElement("script");
        elm.setAttribute("type", "text/javascript");
        elm.src = "http://free.worldweatheronline.com/feed/weather.ashx?q=Harrisonburg%2C+Va%2CUSA&format=json&num_of_days=1&key=9f32aa67e5174729132002";
        document.body.appendChild(elm);
});