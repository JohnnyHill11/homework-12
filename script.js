'use strict';

function Calculator(baseNumber) {
  this.base = baseNumber;
  this.summation = (number) => isNumberValid(number) ?  this.base += number : 0;
  this.subtraction = (number) => isNumberValid(number) ?  this.base -= number : 0;
  this.multiplication = (number) => isNumberValid(number) ?  this.base *= number : 0;
  this.division = (number) => isNumberValid(number) ?  this.base /= number : 0;
  this.set = (number) => isNumberValid(number) ?  this.base = number : 0;
  this.get = () => console.log("Result: ", calculator.base);
}

function isNumberValid(number) {
  return !isNaN(number);
}

let  calculator = new Calculator(10);

calculator.summation(30);
calculator.get();
calculator.subtraction(20);
calculator.get();
calculator.subtraction('hgfhgf');
calculator.get();
calculator.multiplication(5);
calculator.get();
calculator.division(10);
calculator.get();
calculator.set(50);
calculator.get();
calculator.summation(function() {});
calculator.get();
calculator.multiplication(3);
calculator.get();