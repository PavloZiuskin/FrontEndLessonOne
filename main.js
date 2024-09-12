let numbers = +prompt("Enter a number");

for (let j = 2; j<numbers; j+=1){
    if(numbers % j === 0){
        console.log(`This ${numbers} is difficult`);
        break
    }
    if((j+1) === numbers){console.log(numbers);}



}