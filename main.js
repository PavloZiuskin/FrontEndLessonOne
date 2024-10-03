const userInformations = {
    userName: 'John',
    userAge: 22,
    userTown: 'Kyiv',
    userInfo: function() {
        return `User name: ${this.userName}; User Age: ${this.userAge}; UserCity: ${this.userTown}`;
    }
}

console.log(userInformations.userInfo());