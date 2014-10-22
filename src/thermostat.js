function Thermostat() {
	this.temperature = 20;
	this.isPowerSaverOn = true
	this.minimumTemperature = 10
};

Thermostat.prototype.increaseTemperature = function() {
	this.increaseTemperatureBy(1)
};

Thermostat.prototype.decreaseTemperature = function() {
	this.decreaseTemperatureBy(1);
};

Thermostat.prototype.increaseTemperatureBy = function(degrees) {
	this.temperature += degrees
};

Thermostat.prototype.decreaseTemperatureBy = function(degrees) {
	this.temperature -= degrees
};


