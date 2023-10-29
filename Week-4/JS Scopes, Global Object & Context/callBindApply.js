class Calculator {
  add(x, y) {
    return x + y;
  }

  subtract(x, y) {
    return x - y;
  }

  multiply(x, y) {
    return x * y;
  }

  divide(x, y) {
    return x / y;
  }
}

class ScientificCalculator extends Calculator {
  square(x) {
    return x ** 2;
  }

  cube(x) {
    return x ** 3;
  }

  power(x, y) {
    return x ** y;
  }
}

const calc = new ScientificCalculator();
const calculator = new Calculator();
console.log("Addition Result: ", calculator.add.call(calc, 10, 5));
console.log("Subtraction Result: ", calculator.subtract.apply(calc, [10, 5]));
const multiplyByTwo = function (num) {
  return num * 2;
};
calc.multiplyByTwo = multiplyByTwo.bind(calc);
console.log("multiplyByTwo Result: ", calc.multiplyByTwo(5));

const powerOfThree = function (num) {
  return num ** 3;
};
calc.powerOfThree = powerOfThree.bind(calc);
console.log("powerOfThree Result: ", calc.powerOfThree(2));
