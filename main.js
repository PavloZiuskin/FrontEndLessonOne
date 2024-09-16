const writtenString = "Hello, World";
const removedItems= "l, d";

function removeElements(someWords, deletedItems) {
    let userWrite=someWords.split("");
    let userDelete=deletedItems.split("");
    userWrite.forEach((item)=>{
        console.log(item);
        for(let i=0;i<userDelete.length;i++){
            if(userWrite.includes(userDelete[i]) && userDelete[i] !== " " && userDelete[i] !== ","){
                userWrite.splice(userWrite.indexOf(userDelete[i]),1);
            }
        }
    })
    return userWrite.join(" ");
}
console.log(removeElements(writtenString, removedItems));