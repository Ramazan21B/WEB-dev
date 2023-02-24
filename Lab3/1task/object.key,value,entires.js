// Write the function sumSalaries(salaries) that returns the sum of all
// salaries using Object.values and the for..of loop.
function sumSalaries(salaries) {

    let sum = 0;
    for (let salary of Object.values(salaries)) {
        sum += salary;
    }

    return sum; // 650
}

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

alert( sumSalaries(salaries) ); // 650
// Write a function count(obj) that returns the number of properties in the object:
function count(obj) {
    return Object.keys(obj).length;
}