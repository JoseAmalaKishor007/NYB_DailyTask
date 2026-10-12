console.log('IIFE');

//IIFE 

let num1=45;
let num2=94;

(function add(){
    let res1=num1+num2;
    console.log(res1);
})();

// add();
(function name(name){
    console.log('My Name is',name)
})('Kishor');


//Function Currying

// normal function
function normalAdd(a,b,c){
    console.log(a+b+c);
}

normalAdd('This is normal Currying function :',70,20,30);


// with Curry Function
 
function curryAdd(a){
    return function(b){
        return function(c){
           return (a+b+c);
        }
    }
}
 console.log('This is Currying function :',curryAdd(10)(20)(50));

// Arrow Function
let arrowAdd=a => b => c => a+b+c;

console.log('This is Arrow Currying function :',arrowAdd(20)(30)(40))


// First-Class Function

// Assigned to a variable
// Passed as an argument to another function
// Returned from another function
// Stored in an array or object

// Assigned to a variable

const greet1 = function () {
    console.log("Hello");
};

greet1();

// Passed as an argument to another function

function greet2() {
    console.log("Hello");
}

function execute(fn) {
    fn();
}

execute(greet2);

// Returned from another function

function outer() {
    return function () {
        console.log("Hello return function");
    };
}

const result = outer();

result();

// Stored in an array or object

const functions = [
    function () {
        console.log("Hii");
    },
    function () {
        console.log("Welcome");
    }
];

functions[0]();
functions[1]();








