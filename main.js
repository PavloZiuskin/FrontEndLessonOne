const numbersArr= [1,2,3,4,5,22,41,169,244,333];

const ewenNumbers =(numArr)=>{
    let ewensArr=[];
    numArr.forEach((element)=>{
        if(element % 2 === 0){
            ewensArr.push(element);
        }
    })
    return ewensArr;
}

console.log(ewenNumbers(numbersArr));