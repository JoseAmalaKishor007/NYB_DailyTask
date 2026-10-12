console.log('CallBack Function')


function greet () {
    console.log("Hello Kishor");
};

greet();

// Function Expression

let add = function(a, b) {
    return a + b;
};

let result = add(10, 20);

console.log(result);

// Function Declaration

function name(name) {
    console.log("Hello " + name);
}

name("Kishor");

// Anonymous Function

let dev = function() {
    console.log("Im a developer");
};

dev();


// Default Parameters

function defaultParameter(name = "Default Parameter") {
    console.log("This is " + name);
}

defaultParameter();

// Rest Parameters

function rest(...numbers) {
    let sum = 0;

    for (let num of numbers) {
        sum = sum + num;
    }

    return sum;
}

console.log(rest(10, 20, 30, 40));

// Spread Operator

let numbers = [10, 20, 30];

let newNumbers = [...numbers];

console.log(newNumbers);












