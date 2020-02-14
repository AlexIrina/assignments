// // Constructor Functions
// //main purpose: blueprint to generate js objects with the same shape

// // Step 1
// // making a blueprint for CAR object
// // with this constructor im creating the .make and .model for the CAR object
// // the properties to make a car
// const Car = (make, model) => {
//   (this.make = make), (this.model = model);
//   // to make it do things using methods
// };

// // Step 2
// // Each Constructor has a prototype
// // With prototype i can add methods to be used whenever i choose in the objects im creating.
// // methods are the doing words
// Car.prototype.honk = function() {
//   return `HOOOONK`;
// };

// // Step 3
// // I can now use this Car constructor function like so
// // the NEW keyword is making a new instance of the CAR object
// const jeep = new Car('jeep', 'cherokee');
// console.log(jeep); //Car { make: 'jeep', model: 'cherokee' }
// // i added the prototype to the jeep here. Only the Jeep has it.
// console.log(jeep.honk()); //HOOOONK

// const tesla = new Car('tesla', 'model-S');

// ALWAYS USE CLASSES OVER ES5 CONSTRUCTORS
// ES6 Classes

// In es6, classes were introduced to clean up the Constructor and prototype syntax. Makes it look es6xy
// Also Classes lets me EXTEND other classes so i don't have to repeat myself
// here IM REMAKING THE CONSTRUCTOR BUT MAKING IT AS A CLASS

// CLEANER WAY IN DECLARING PROTOTYPES AND METHODS
// 1. Constructor
class Vehicle {
  // what it is to be a car
  constructor(make, model, honkSound) {
    //  can add as many as you want
    (this.make = make), (this.model = model), (this.honkSound = honkSound);
  }
  // This is where i put all the prototypes methods
  // You can add as many methods as you want
  // 2 What the car does
  honk() {
    // not all cars honk the same
    return this.honkSound;
  }
  drive() {
    console.log(`Wroom Wroom`);
  }
}

// 3 Create the new instance of Vehicle object
const toyota = new Vehicle('toyota', 'camry', 'toyotas honk sound');

console.log(toyota.honk());

// HOW TO INHERIT PROPERTIES FROM VEHICLE CONSTRUCTOR?
// using EXTEND will let the motorcycle class inherit properties/methods from Vehicle constructor
// Vehicle blueprint is now the parent to the Motorcycle blueprint
// 1
class Motorcycle extends Vehicle {
  constructor(make, model, honkSound, hasSideCar) {
    //3 super() tells the Motorcycle constructor to look at the Vehicle constructor to see how the make and model properties are set up
    // super() copies the Vehicle constructor setup
    super(make, model, honkSound);
    // 2 SideCar is specific to the Motorcycle because the Vehicle cant have a sidecar
    this.hasSideCar = hasSideCar;
  }
}

// test
const harley = new Motorcycle('harley', 'davidson', 'harkeys honk sound', true);
console.log(harley); //{ make: 'harley', model: 'davidson', hasSideCar: true }

// test
// checks the MOTORCYCLE and then uses the SUPER() to check the VEHICLE constructor to use the honk and drive methods
console.log(harley.honk()); //HOOOONK!
console.log(harley.drive()); //Wroom Wroom

// ALL OF JAVASCRIPT IS BUILT THIS WAY.
// // example with the arrays method .JOIN()

// const arr = [1, 2, 3];
// arr.join('');
// class Array {
//   constructor() {}
//   // method that lets the array join
//   join() {}
// }
