//Here the function makeUser returns an object.
//
// What is the result of accessing its ref? Why?
function makeUser() {
    return {
        name: "John",
        ref: this
    };
}

let user = makeUser();

alert( user.ref.name ); // Error: Cannot read property 'name' of undefined
// Create a calculator
let calculator = {
    read(){
        this.a = prompt("+a",0);
        this.b = prompt("+b",0);
    },
    sum(){
        return this.a + this.b;
    },
    mul(){
        return this.a * this.b;
    }
};
alert(calculator.read())
alert(calculator.sum());
// Chaining
let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep() {
        alert( this.step );
        return this;
    }
};

ladder.up().up().down().showStep().down().showStep(); // shows 1 then 0
