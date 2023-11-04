// Section-1 (Inheritance)///////////////////////////
class Vehicle {
  constructor(make, model, year, color) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
  }
  drive() {
    console.log(`Driving ${this.make} ${this.model}`);
  }
}

class Car extends Vehicle {
  constructor(make, model, year, color, numSeats) {
    super(make, model, year, color);
    this.numSeats = numSeats;
  }
}

class RideShareCar extends Car {
  constructor(make, model, year, color, numSeats, isAvailable) {
    super(make, model, year, color, numSeats);
    this.isAvailable = isAvailable;
  }
}

const myCar = new RideShareCar("Maruti", "Swift", 2017, "White", 5, false);
console.log(myCar.drive());

///////////////////////////////////////////
///////Section -2 (Polymorphism)//////////////////
class Shape {
  calculateArea() {}
}

class Rectangle extends Shape {
  constructor(height, width) {
    super();
    this.height = height;
    this.width = width;
  }
  calculateArea() {
    return this.height * this.width;
  }
}

class Triangle extends Shape {
  constructor(base, height) {
    super();
    this.base = base;
    this.height = height;
  }
  calculateArea() {
    return (this.base * this.height) / 2;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }
  calculateArea() {
    return Math.PI * this.radius ** 2;
  }
}

const myRec = new Rectangle(10, 5);
console.log(myRec.calculateArea());
const myTri = new Triangle(5, 10);
console.log(myTri.calculateArea());
const myCir = new Circle(5);
console.log(myCir.calculateArea());

////////////////////////////////////////////////
//////////Section -3 ( Abstraction and encpasulation)//////////

class BankAccount {
  #accountNumber;
  #balance;
  #accountHolderName;
  constructor(accountNumber, balance, accountHolderName) {
    this.#accountHolderName = accountHolderName;
    this.#balance = balance;
    this.#accountNumber = accountNumber;
  }
  getBalance() {
    return this.#balance;
  }

  withdraw(amount) {
    this.#balance -= amount;
  }
  deposit(amount) {
    this.#balance += amount;
  }
}

class CheckingAccount extends BankAccount {
  constructor(accountNumber, balance, accountHolderName) {
    super(accountNumber, balance, accountHolderName);
  }
  withdraw(amount) {
    if (this.getBalance() - amount < 0) {
      console.log("Insufficient funds");
    } else {
      super.withdraw(amount);
    }
  }
}
class SavingsAccount extends BankAccount {
  constructor(accountNumber, balance, accountHolderName) {
    super(accountNumber, balance, accountHolderName);
  }
  withdraw(amount) {
    if (this.getBalance() - amount < 0) {
      console.log("Insufficient funds");
    } else {
      super.withdraw(amount);
    }
  }
}

const myCheckAcc = new CheckingAccount(12345, 10000, "Mihir Gadhe");
const mySaveAcc = new SavingsAccount(54321, 9000, "Kunak Chavan");

console.log(mySaveAcc.getBalance());
mySaveAcc.deposit(900);
mySaveAcc.withdraw(900);
console.log(mySaveAcc.getBalance());

console.log(myCheckAcc.getBalance());
myCheckAcc.deposit(100);
myCheckAcc.withdraw(50);
console.log(myCheckAcc.getBalance());

////////////////////////////////////////////////////////////////////
