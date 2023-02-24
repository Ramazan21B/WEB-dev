// Rewrite the function using '?' or '||'
function checkAge(age) {
    if (age > 18) {
        return true;
    } else {
        return confirm('Did parents allow you?');
    }
}
// with ?
function checkAge(age) {
    return (age > 18) ? true : confirm('Did parents allow you?');
}
// with ||
function checkAge(age) {
    return (age > 18) || confirm('Did parents allow you?');
}
// Function min(a, b)
function min(a,b){
    if(a > b){
        return a;
    }else{
        return b
    }
}
// Function pow(x,n)
function pow(x,n){
   return x ** n;
}
let x = prompt("x?",);
let n = prompt("n?",);
if (n < 1) {
    alert(`Power ${n} is not supported, use a positive integer`);
} else {
    alert( pow(x, n) );
}

