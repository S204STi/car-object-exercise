'use strict';

var Car = function (mpg) {
	this.fuel = this.fill();
	this.mpg = mpg;
	this.trips = [];
	this.odometer = 0;
	this.drive = function(distance){
		this.distance = distance;
		this.gallons = this.gallons - this.distance / this.mpg;
		this.trips.push(this.distance + " miles");
		console.log(this.trips);
	};
};

Car.prototype.fill = function (gallons) {
	this.gallons = gallons;
};

Car.prototype.trip = function(distance){
		this.odometer = distance;
};


module.exports = Car;
