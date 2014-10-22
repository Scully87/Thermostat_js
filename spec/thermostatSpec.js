"use strict";
describe('Thermostat', function() {

	var thermostat;

		beforeEach(function() {
			thermostat = new Thermostat();
		});

	describe('by default', function() {

		it('is set to 20 degrees', function() {
			expect(thermostat.temperature).toEqual(20);
		});

		it('has a minimum temperature of 10 degrees', function() {
			expect(thermostat.minimumTemperature).toEqual(10)
		});

		it('power saving mode will be on', function() {
			expect(thermostat.isPowerSaverOn).toBe(true);
		});

		it('power saver mode will have a maximum temperature of 25 degrees', function() {
			expect(thermostat.maxTemp()).toEqual(25)
		});

		it('power save off has a maximum temperature of 32 degrees', function() {
			thermostat.togglePowerSaver();
			expect(thermostat.maxTemp()).toEqual(32);
		});

		it('can incraease the temperature by one degree', function() {
			thermostat.increaseTemperature();
			expect(thermostat.temperature).toEqual(21);
		});

		it('can decrease the temperature by one degree', function() {
			thermostat.decreaseTemperature();
			expect(thermostat.temperature).toEqual(19);
		});


	});

	describe('custom options', function() {

		it('can increase the temperature by 12', function() {
			thermostat.increaseTemperatureBy(12)
			expect(thermostat.temperature).toEqual(32);
		});

		it('can decrease the temperature by 5', function() {
			thermostat.decreaseTemperatureBy(5)
			expect(thermostat.temperature).toEqual(15);
		});

		it('power saver can be switched off', function() {
			thermostat.togglePowerSaver();
			expect(thermostat.isPowerSaverOn).toEqual(false);
		});

		it('power saver can be switched off', function() {
			thermostat.togglePowerSaver();
			thermostat.togglePowerSaver();
			expect(thermostat.isPowerSaverOn).toEqual(true);
		});

	});

});