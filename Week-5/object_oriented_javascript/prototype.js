/////////////////Protecting the Object/////////////////////
const person = {
  name: "Mihir",
  age: 22,
  email: "gadhemihir96@gmail.com",

  getAge() {
    return this.age;
  },
  setAge: function (age) {
    this.age = age;
  },
};

Object.defineProperties(person, {
  name: {
    value: "Mihir",
    writable: false,
    enumerable: false,
    configurable: false,
  },
  email: {
    value: "gadhemihir96@gmail.com",
    writable: false,
    enumerable: false,
    configurable: false,
  },
});
person.name = "Mansi";
person.email = "mansigadhe1234@gmail.com";
console.log(person.setAge(20));
console.log(person);
///////////////////////////////////////////////////////////

///////////////////////JavaScript Prototype//////////////
class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
}

class Car extends Vehicle {
  constructor(make, model, year, numDoors) {
    super(make, model, year);
    this.numDoors = numDoors;
  }

  getDetails() {
    console.log(
      `Driving ${this.make} of  ${this.model} ${this.year} with ${this.numDoors} doors`
    );
  }
}

const myVehicle = new Vehicle("Maruti", "Suzuki", 2019);
const myCar = new Car("Hero", "Honda", 2019, 5);
Vehicle.prototype.getDetails = function () {
  console.log(`Driving ${this.make} of  ${this.model} ${this.year}`);
};
console.log(myVehicle.getDetails());
console.log(myCar.getDetails());
/////////////////////////////////////////////////////////////////
