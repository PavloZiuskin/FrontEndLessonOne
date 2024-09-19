function carryAdd(firstNumber) {
    return function (secondNumber) {
        return firstNumber * secondNumber;
    }
}
console.log(carryAdd(3)(4));