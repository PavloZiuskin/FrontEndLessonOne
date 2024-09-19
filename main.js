function createSum() {
    let sum =0;
     function createSum(firstNumber) {
         sum += firstNumber;
         console.log(sum);

    }
    return createSum;
}

const sum=createSum(4);


sum(5)
sum(4)
sum(20)