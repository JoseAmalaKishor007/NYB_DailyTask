console.log('-----Immediately Invoked Function Expression)-----');

(function add(){
    console.log(5+9)
})();

(function () {
    console.log("I am an IIFE Function");
})();


console.log('-----Closure-----');

function outer() {
    let count = 0;

    function inner() {
        count++;
        console.log("Count:", count);
    }

    return inner;
}

let counter = outer();

counter();
counter();
counter();


function employee() {
    let empName = "Amala";

    function display() {
        console.log(empName);
    }

    return display;
}

let result = employee();
result();


console.log('-----First-Class Functions-----')

function greet() {
    return "Hello";
}

let message = greet;

console.log(message());


function multiply(a, b) {
    return a * b;
}

function calculate(fun, x, y) {
    console.log(fun(x, y));
}

calculate(multiply, 5, 4);


console.log('-----Pure Function-----')

function addition(a, b) {
    return a + b;
}

console.log(addition(10, 20));
console.log(addition(10, 20));

function square(number) {
    return number * number;
}

console.log(square(6));
console.log(square(6));


console.log('-----Impure Function-----')

let total = 0;

function addToTotal(value) {
    total += value;
    return total;
}

console.log(addToTotal(10));
console.log(addToTotal(10));



let amount = 100;

function addMoney(value) {
    amount += value;
    return amount;
}

console.log(addMoney(50));
console.log(addMoney(50));















































