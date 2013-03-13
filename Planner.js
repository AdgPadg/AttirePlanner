/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


$( document ).ready( function(){
    $.ajax({
        url: "http://free.worldweatheronline.com/feed/weather.ashx?q=Harrisonburg%2C+Va%2CUSA&format=json&num_of_days=1&key=9f32aa67e5174729132002",
        dataType: 'jsonp',  // You  need to use 'jsonp' here because it is cross domain request 
        success: function(data) {
            $.each(data, function(index, value) {
                alert(value.current_condition[0].cloudcover);
                alert(value.current_condition[0].humidity);
                alert(value.current_condition[0].weatherDesc[0].value);
                alert(value.request[0].query);
                alert(value.request[0].query);
                $.each(value.weather, function(i, val) {
                    alert(val.precipMM);
                    alert(val.weatherDesc[0].value);
                });
            });
        }
    });
});