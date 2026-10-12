console.log('Miscellanous Topics')


// IIFE

function msg() {
    console.log("Normal Function");
};
msg();

(function iifeFun() {
    console.log("IIFE Function");
})();

// Function Currying

function multiply(a) {
    return function(b) {
        return a * b;
    };
}

let res1 = multiply(5)(4);

console.log(res1);

// First-Class Function

function firstClass() {
    console.log("Welcome");
}

let first = firstClass;

first();


// Higher-Order Function

function process(fun) {
    fun();
}

function greet() {
    console.log("Hello");
}

process(greet);

// Pure Function

function pure(a, b) {
    return a + b;
}

let res2 = pure(10, 20);

console.log(res2);

// Impure Function

let num = 10;

function impure() {
    num = num + 5;
    return num;
}

console.log(impure());
console.log(impure());

// Recursion Function


function factorial(n) {
    if (n == 1) {
        return 1;
    }

    return n * factorial(n - 1);
}

let res3 = factorial(5);

console.log(res3);


// Anonymous Function

let anonomoue = function() {
    console.log("Hello");
};

anonomoue();

// Callback Function


function greet(name) {
    console.log("Hello " + name);
}

function process(callback) {
    callback("Kishor");
}

process(greet);


// Function Expression

let funExp = function(a, b) {
    return a + b;
};

let res4 = funExp(10, 20);

console.log(res4);

// Function Declaration

function funDec(name) {
    console.log("Hello " + name);
}

funDec("Kishor");


// Closure

function outer() {
    let count = 0;

    return function inner() {
        count++;
        console.log(count);
    };
}

let res8 = outer();

res8();
res8();
res8();



// Arrow Function

let arrouFun = (a, b) => {
    return a + b;
};

let res5 = arrouFun(10, 20);

console.log(res5);


// Default Parameters

function defPerameter(name = "Kishor") {
    console.log("Hello " + name);
}

defPerameter();
defPerameter("John");

// Rest Parameters


function restParameter(...numbers) {
    let sum = 0;

    for (let num of numbers) {
        sum = sum + num;
    }

    return sum;
}

let res6 = restParameter(10, 20, 30);

console.log(res6);



// Spread Operator

let a = [10, 20, 30];
let b = [40, 50, 60];

let res7 = [...a, ...b];

console.log(res7);

















