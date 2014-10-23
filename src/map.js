function initialize() {
  var mapOptions = {
    zoom: 10,
    center: new google.maps.LatLng(51.5286416,-0.1015987)
  };

  var map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

  var weatherLayer = new google.maps.weather.WeatherLayer({
    temperatureUnits: google.maps.weather.TemperatureUnit.CELCIUS
  });
  weatherLayer.setMap(map);

  var cloudLayer = new google.maps.weather.CloudLayer();
  cloudLayer.setMap(map);
}

google.maps.event.addDomListener(window, 'load', initialize);