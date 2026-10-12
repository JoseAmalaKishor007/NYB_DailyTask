// Factorial using recursion

function factorial(n){

    if(n===0){
        return 1;
    }

    return n*factorial(n-1);
}
console.log(factorial(5))



// Fibonacci series using recursion

function fibonacci(n) {

    if (n <= 1) {
        return n;
    }

    return fibonacci(n - 1) + fibonacci(n - 2);
}

for (let i = 0; i < 10; i++) {
    console.log(fibonacci(i));
}


// sum of num 

function sum(n) {
    if (n === 1) {
        return 1;
    }

    return n + sum(n - 1);
}

console.log(sum(10));


// var

console.log('-----var-----')
console.log('Function Scope')

function test() {
    if (true) {
        var x = 10;
    }
    console.log(x); // 10
}
test();

console.log('Redeclaration')
var a = 10;
var a = 20;
console.log(a); // 20


console.log('Hoisting')
console.log(c); // undefined
var c = 10;


// let

console.log('-----let-----')
console.log('Block Scope')

if (true) {
  let z = 10;
}

// console.log(z);

console.log('Reassignment')
let count1 = 1;
count1 = 2;

console.log(count1);

console.log('Temporal Dead Zone (TDZ)')
let count2 = 1;
count2 = 2;

console.log(count2);


// const

console.log('-----const-----')
console.log('Block Scope')

if (true) {
  const y = 10;
}

// console.log(y); // ReferenceError



console.log('Function Hoisting')

greet1();
function greet1() {
    console.log("Hello World");
}



console.log('Function Expression')

sayHi();
var sayHi = function() {
    console.log("Hi");
};


console.log('Arrow Function Hoisting')

add(10, 20);

const add = (a, b) => a + b;


console.log('var inside function')
function test() {
    console.log(x);
    
    var x = 100;
    
    console.log(x);
}
test();



console.log(a);
console.log(b);

var a = 10;
var b = 20;

console.log('Class Hoisting')

const obj = new Person();

class Person {
    constructor() {
        this.name = "Jose";
    }
}





















