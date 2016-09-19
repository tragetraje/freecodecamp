$( document ).ready(function() {
    var urlLocApi = 'http://ipinfo.io';
    $.getJSON(urlLocApi, function(location) {
        var coordinates = location.loc.split(',');
        var lat = coordinates[0];
        var lon = coordinates[1];
        var city = location.city;
        var html = '';
        var urlWeatherApi = 'http://api.openweathermap.org/data/2.5/weather';
        urlWeatherApi += '?' + $.param({
            'lat': lat,
            'lon': lon,
            'units': 'metric',
            'appid': 'd988397f6b657b836b5abc918b43b7f0'
        });
        $.getJSON(urlWeatherApi, function(forecast) {
            var condition = forecast.weather[0].main;
            var celsius = forecast.main.temp;
            var fahrenheit = (celsius * 9/5) + 32;
            var weather = '';
            var bkgImg = '';
            //console.log(forecast.weather[0].main);
            //console.log(forecast.main.temp);
            switch (condition) {
                case "Clouds":
                    weather = "Cloudy.";
                    bkgImg = 'bg-clouds';
                    break;
                case "Clear":
                    weather = "The sky is clear.";
                    bkgImg = 'bg-clear';
                    break;
                case "Rain":
                    weather = "It's raining.";
                    bkgImg = 'bg-rain';
                    break;
                case "Snow":
                    weather = "It's snowing.";
                    bkgImg = 'bg-snow';
                    break;
                case "Extreme":
                    weather = "Caution! Extreme weather conditions.";
                    bkgImg = 'bg-extreme';
                    break;
                default:
                    weather = "Sorry, not sure what " + condition.toLowerCase() + " means.";
                    bkgImg = 'bg-default';
            }

            $('.information').text('Hello ' + city + '!');
            $('.btn-weather').click(function() {
                $('body').removeClass('bg-default').addClass(bkgImg);
                $('.btn-weather').hide();
                $('.btn-fahrenheit').show();
                $('.information').text("It's " + Math.round(celsius) + "°C in " + city + ". ")
                    .append(weather);
            });
            $('.btn-celsius').click(function() {
                $('.btn-celsius').hide();
                $('.btn-weather').hide();
                $('.btn-fahrenheit').show();
                $('.information').text("It's " + Math.round(celsius) + "°C in " + city + ". ")
                    .append(weather);
            });
            $('.btn-fahrenheit').click(function() {
                $('.btn-fahrenheit').hide();
                $('.btn-celsius').show();
                $('.information').text("It's " + Math.round(fahrenheit) + "°F in " + city + ". ")
                    .append(weather);
            });
        });
    });
});
