(function () {
    for (let i=0; i < 10; i++) {
        let newNumber= +prompt("Enter a number bigger 100");
        if (newNumber > 100 ) {
            console.log(newNumber);
            return;
        }
    }
})();
