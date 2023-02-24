//Last loop value
let i = 3;

while (i) {
    alert( i-- );
}//1
//Which values does the while loop show?
let i = 0;
while (++i < 5) alert( i );//prefix From 1 to 4
let i = 0;
while (i++ < 5) alert( i );//postfix From 1 to 5
// Which values get shown by the "for" loop?
for (let i = 0; i < 5; i++) alert( i );
for (let i = 0; i < 5; ++i) alert( i );
// The answer: from 0 to 4 in both cases.
//Output even numbers in the loop
for (let i = 2;i <= 10;i++ ){
    if(i % 2 == 0){
        alert(i)
    }
}
//Replace "for" with "while"
/*for (let i = 0; i < 3; i++) {
    alert( `number ${i}!` );
}*/
let i = 0;
while (i < 3){
    alert(`number ${i}!`);
    i++;
}
//Write a loop which prompts for a number greater than 100. If the visitor enters another number – ask them to input again.
//
// The loop must ask for a number until either the visitor enters a number greater than 100 or cancels the input/enters an empty line.
//
// Here we can assume that the visitor only inputs numbers. There’s no need to implement a special handling for a non-numeric input in this task.
let n;
do{
    n = prompt("Enter a number greater than 100?",)
}while (n <= 100 && n);
// Output prime numbers
let n = 10;
Nextprime:
for (let i = 2;i <= n;i++){
    for(let j = 2;j < i;j++ ){
        if(i % j == 0) continue Nextprime
    }
    alert(i);
}