//What is the result of AND?
alert( 1 && null && 2 );//null
//What is the result of AND'ed alerts?
alert( alert(1) && alert(2) );//The answer: 1, and then undefined.
//The result of OR AND OR
alert( null || 2 && 3 || 4 );// 3
//if (age >= 19 && age <= 90);
//1 variant if (!(age >= 19 && age <= 90))
//2 variant if (age >= 19 || age <= 90)
//Which of these alerts are going to execute?
// Runs.
// The result of -1 || 0 = -1, truthy
if (-1 || 0) alert( 'first' );

// Doesn't run
// -1 && 0 = 0, falsy
if (-1 && 0) alert( 'second' );

// Executes
// Operator && has a higher precedence than ||
// so -1 && 1 executes first, giving us the chain:
// null || -1 && 1  ->  null || 1  ->  1
if (null || -1 && 1) alert( 'third' );
//Check the login
let userName = prompt("Who's there?", '');

if (userName === 'Admin') {

    let pass = prompt('Password?', '');

    if (pass === 'TheMaster') {
        alert( 'Welcome!' );
    } else if (pass === '' || pass === null) {
        alert( 'Canceled' );
    } else {
        alert( 'Wrong password' );
    }

} else if (userName === '' || userName === null) {
    alert( 'Canceled' );
} else {
    alert( "I don't know you" );
}