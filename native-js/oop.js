/**
 * Created by chan on 2/9/17.
 */

function Vehicle() {
    this.name = 'vehicle';
}

Vehicle.prototype.drive = function() {
    console.log('I can drive');

    if (this.service()) {

    } else {
        
    }
};

// car.drive() is public;
// car.service() is NOT public;

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

