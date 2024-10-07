
function createTable(tableSize){
    let myTable = document.querySelector(".table");
    for (let i = 1; i <= tableSize; i++) {
        let row = document.createElement("th");

        for (let j = 1; j <= tableSize; j++) {
            let cell = document.createElement("td");
            cell.innerHTML = i * j;
            row.appendChild(cell);
        }
        myTable.appendChild(row);

    }

};
console.log(createTable(13));