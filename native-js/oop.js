/**
 * Created by chan on 2/9/17.
 */

function Vehicle() {
    this.name = 'vehicle';
}

Vehicle.prototype.drive = function() {
    console.log('I can drive');
};

var car = new Vehicle();
var sportsCar = Object.create(car);

car.drive();
sportsCar.drive();

console.log('now we give car a new drive method...');

car.drive = function() {
    console.log('I can drive with four wheels');
};

console.log('...and see how sportsCar, a child of car, drives');
sportsCar.drive();


