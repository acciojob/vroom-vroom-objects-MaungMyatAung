// Car constructor function
function Car(make, model) {
    this.make = make; // Initialize make property
    this.model = model; // Initialize model property
}

// Add getMakeModel method to Car's prototype
Car.prototype.getMakeModel = function() {
    return `${this.make} ${this.model}`; // Return make and model as a string
};

// SportsCar constructor function
function SportsCar(make, model, topSpeed) {
    Car.call(this, make, model); // Call the Car constructor to initialize make and model
    this.topSpeed = topSpeed; // Initialize topSpeed property
}

// Inherit from Car's prototype
SportsCar.prototype = Object.create(Car.prototype);
SportsCar.prototype.constructor = SportsCar; // Set the constructor property to SportsCar

// Add getTopSpeed method to SportsCar's prototype
SportsCar.prototype.getTopSpeed = function() {
    return this.topSpeed; // Return the top speed
};

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;