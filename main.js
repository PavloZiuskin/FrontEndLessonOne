let stringNumber = "10369"
let lastNumber = stringNumber % 10;
let fourthsNumbers =parseInt (stringNumber / 10) % 10;
let thirdNumbers =parseInt (stringNumber / 100) % 10;
let secondNumbers =parseInt (stringNumber / 1000) % 10;
let firstNumbers =parseInt (stringNumber / 10000) % 10;

console.log(`${firstNumbers} ${secondNumbers} ${thirdNumbers} ${fourthsNumbers} ${lastNumber}`);

