const arrayNew = [1, 3, 4, 6, 2, 5, 7];
function summaryNumbers(array){
    let sum = 0;
    array.filter(element => {if(typeof(element)==="number"&&!isNaN(element) ){ sum += element}})
    console.log(sum);
}
summaryNumbers([1,"sss",3,true,NaN]);