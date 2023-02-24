// Write the destructuring assignment that reads:
//
// name property into the variable name.
// years property into the variable age.
// isAdmin property into the variable isAdmin (false, if no such property)
let user = {
    name: "John",
    years: 30
};

let {name, years: age, isAdmin = false} = user;

alert( name ); // John
alert( age ); // 30
alert( isAdmin ); // false
// Create the function topSalary(salaries) that returns the name of the top-paid person.
//
// If salaries is empty, it should return null.
// If there are multiple top-paid persons, return any of them.
function topSalary(salaries) {

    let maxSalary = 0;
    let maxName = null;

    for(const [name, salary] of Object.entries(salaries)) {
        if (maxSalary < salary) {
            maxSalary = salary;
            maxName = name;
        }
    }

    return maxName;
}