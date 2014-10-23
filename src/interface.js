$(document).ready(function() {
  new ThermocatView('.thermometer');
});

var thermocat = new Thermocat;

$.getJSON('/weather', function(data) {
    $('h3').text('London outside temp ' + (parseInt(data['list'][1]['main']['temp'])) + '°C')
});

function ThermocatView(element) {
  this.element = $(element);
  this.thermocat = new Thermocat;
  this.element.text(this.thermocat.temperature);
  this.bindTo('.increase_temperature', this.thermocat, this.thermocat.increaseTemperature);
  this.bindTo('.decrease_temperature', this.thermocat, this.thermocat.decreaseTemperature);
  this.bindTo('.reset', this.thermocat, this.thermocat.resetTemperature);
};

ThermocatView.prototype.bindTo = function(selector, obj, func) {
  $(selector).on('click', function() {
    $('.thermometer').text(func.call(obj) );
  });
};
