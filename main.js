let threeNumber = prompt("Enter number which include three numerals");
let lastNumber = threeNumber % 10;
let secondNumber = parseInt(threeNumber / 10) %10;
let firstNumber = parseInt(threeNumber / 100) % 10;
if(firstNumber === secondNumber && secondNumber===lastNumber){
    console.log("Ви ввели три однакові цифри")
}   else if (firstNumber === secondNumber || secondNumber === lastNumber || firstNumber === lastNumber){
    console.log("Ви ввели дві однакові цифри")
}

if (firstNumber === secondNumber){
    console.log("Перша та друга цифри однакові")
}else
if (firstNumber === lastNumber){
    console.log("Перша та третя цифри однакові")
}else
if (lastNumber === secondNumber){
    console.log("Третя та друга цифри однакові")
}else{
    console.log("Ви ввели три різні цифри")
}
