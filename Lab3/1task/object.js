// Write the code, one line for each action:
//
//     Create an empty object user.
//     Add the property name with the value John.
//     Add the property surname with the value Smith.
//     Change the value of the name to Pete.
//     Remove the property name from the object.
let user ={

}
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;
// Check for emptiness
function isEmpty(obj){
    for (let key in obj){
        return false;
    }
    return true;
}
// Sum object properties
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
let sum = 0;
for(let key in salaries){
    sum += salaries[key];
}
alert(sum);
// Multiply numeric property values by 2

function multiplyNumeric(obj){
    for(let key in obj){
        if(obj[key] == 'number'){
            obj[key] *= 2;
        }
    }
}