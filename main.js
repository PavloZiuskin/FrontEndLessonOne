class Calculator {
    constructor() {
    }
    add(first, second) {
        return first +second;
    }
    subtract(first, second) {
        return first - second;
    }
    multiply(first, second) {
        return first * second;
    }
    divide(first, second) {
        return first / second;
    }
}

const calc = new Calculator();
console.log(calc.add(5, 3));
console.log(calc.subtract(10, 4));
console.log(calc.multiply(3, 6));
console.log(calc.divide(8, 2));



