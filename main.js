let company = {
    sales: [{name: "John", salary: 1000},{name: "Alice", salary: 600}],
    shopAssistant: [{name: "Fred", salary: 1200},{name: "Maria", salary: 1000}],
    development:{
        web: [{name: "Peter", salary: 2000},{name: "Alex", salary: 1800}],
        internals: [{name: "Jack", salary: 1200}]
    }
};
function sumSalaries(companyDepartment) {
    if (Array.isArray(companyDepartment)) {
        return companyDepartment.reduce((total, user) => total + user.salary, 0);
    } else {
        let sum = 0;
        for (let subDepartment of Object.values(companyDepartment)) {
            sum += sumSalaries(subDepartment);
        }
        return sum;
    }
}

let totalSalaries = sumSalaries(company);
console.log(totalSalaries);