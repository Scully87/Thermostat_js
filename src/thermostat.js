function Thermostat() {
	this.temperature = 20;
	this.isPowerSaverOn = true
	this.maximumTemperature = 32
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

Thermostat.prototype.maxTemp = function() {
	if(this.isPowerSaverOn){
		this.increaseTemperatureBy(5);
		return this.temperature;
	} else {
		this.increaseTemperatureBy(12);
		return this.temperature;
	}
};

Thermostat.prototype.togglePowerSaver= function() {
	if(this.isPowerSaverOn){
		return this.isPowerSaverOn = false;
	} else {
		return this.isPowerSaverOn = true;
	};
};