const arrayNew = [1, 3, 4, 6, 2, 5, 7];
function removeElement(array, item){
    let elementIndex=0;
    array.splice(array.indexOf(item), 1);
    console.log(array);
}
removeElement(arrayNew, 4);