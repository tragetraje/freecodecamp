function loadData() {
  var urlLocApi = 'http://ipinfo.io';
  $.getJSON(urlLocApi, function(location){
  var coordinates = location.loc.split(',');
  var city = location.city;
  var lat = coordinates[0];
  var lon = coordinates[1];
  //console.log(city);
  var urlWeatherApi = 'http://api.openweathermap.org/data/2.5/weather';
  urlWeatherApi += '?' + $.param({
   'lat': lat,
   'lon': lon,
    'units': 'metric',
    'appid': 'd988397f6b657b836b5abc918b43b7f0'
});
    $.getJSON(urlWeatherApi, function(forecast){
      var condition = forecast.weather[0].main;
      var temperature = forecast.main.temp;
      //console.log('Weather condition: ' + condition + " It's: " + temperature);
    });
});
    return false;
}

$('#container').submit(loadData);
