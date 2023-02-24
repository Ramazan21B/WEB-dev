//Sum numbers from the visitor
// importance: 5
// Create a script that prompts the visitor to enter two numbers and then shows their sum.
let a = +prompt("The first number?", "");
let b = +prompt("The second number?", "");

alert( a + b );
//Why 6.35.toFixed(1) == 6.3?
alert( 1.35.toFixed(1) ); // 1.4//
//In the similar example below, why is 6.35 rounded to 6.3, not 6.4?
alert( 6.35.toFixed(1) ); // 6.3//How to round 6.35 the right way
alert( Math.round(6.35 * 10) / 10 ); // 6.35 -> 63.5 -> 64(rounded) -> 6.4
//Create a function readNumber which prompts for a number until the visitor enters a valid numeric value
function readNumber() {

    let num;

    do {
        num = prompt("Enter a number please?", 0);
    } while ( !isFinite(num) );

    if (num === null || num === '') return null;

    return +num;
}

alert(`Read: ${readNumber()}`);
//This loop is infinite. It never ends. Why?
let i = 0;
while (i != 10) {
    i += 0.2;
}
//None of them is exactly 10.
//
// Such things happen because of the precision losses when adding fractions like 0.2.
//
// Conclusion: evade equality checks when working with decimal fractions.
//A random number from min to max
// importance: 2
// The built-in function Math.random() creates a random value from 0 to 1 (not including 1).
//
// Write the function random(min, max) to generate a random floating-point number from min to max (not including max).
function random(min, max) {
    return min + Math.random() * (max - min);
}

alert( random(1, 5) );
alert( random(1, 5) );
alert( random(1, 5) );
//Create a function randomInteger(min, max) that generates a random integer number from min to max including both min and max as possible values.
function randomInteger(min, max) {
    // now rand is from  (min-0.5) to (max+0.5)
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}

alert( randomInteger(1, 3) );