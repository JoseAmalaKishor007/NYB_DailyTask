console.log("Revision Day 1")


console.log("----- Variables -----")
var a=20;
var b=30;
console.log("var :",a+b);

let c=50;
let d=40;
console.log("let :",c-d);

const e=70;
console.log("const :",e);


console.log("----- Primitive Data Type -----");

let f='Jose Amala Kishor';
console.log("String :",f);
console.log("TypeOf :",typeof f);


let g=83;
console.log("Number :",g);
console.log("TypeOf :",typeof g);

let h=true;
console.log("Boolean :",h);
console.log("TypeOf :",typeof h);

let i=null;
console.log("Null :",i);
console.log("TypeOf :",typeof i);

let j;
console.log("Undefined :",j);
console.log("TypeOf :",typeof j);

let k=8656459386697246434555766n;
console.log("BigInt :",k);
console.log("TypeOf :",typeof k);

let l=Symbol("id");
console.log("Undefined :",l);
console.log("TypeOf :",typeof l);


console.log("----- Non-Primitive Data Type -----");

let m={
    name:"Jose",
    course:'CSE',
    age:22,
}
console.log(m.name);
console.log(m.age);
console.log('TypeOf :',typeof m);


let n=['Jose','Kishor',23,true,57,'Computer Science']
console.log(n[0]);
console.log(n[3]);
console.log(n[5]);
console.log('TypeOf :',typeof n);

function fun(){
    let o=56;
    let p=24;
    console.log(o+p);
}  
fun();
console.log("TypeOf :",typeof fun)


let q = new Date();
console.log(q);
console.log(q.getFullYear());
console.log("TypeOf :",typeof q)


let r = new Map();
r.set("Mary", 90);
r.set("John", 85);
console.log(r.get("Mary"));
console.log(r.size);
console.log("TypeOf :",typeof r)


console.log("----- Truthy and Falsy Values -----")

let s=null;
if(s){
    console.log("Truthy Value");
    console.log(s);
}
else{
    console.log("Falsy Value")
    console.log(s)
}


console.log("----- Operators -----")
console.log("\n----- Arithmetic Operators -----")

let t=80;
let u=40;
console.log("Addition :",t+u);
console.log("Subtraction :",t-u);
console.log("Multiplication :",t*u);
console.log("Division :",t/u);

console.log("\n----- Assignment Operators -----")

let v = 10;

console.log("=  :", v);

v += 5;
console.log("+= :", v);

v -= 3;
console.log("-= :", v);

v *= 2;
console.log("*= :", v);

v /= 4;
console.log("/= :", v);

v %= 3;
console.log("%= :", v);


console.log("\n----- Comparison Operators -----")

let w = 10;
let x = 5;

console.log(w == x);
console.log(w != x);   
console.log(w > x);   
console.log(w < x);    
console.log(w >= x);  
console.log(w <= x);   

console.log(10 === "10"); 
console.log(10 !== "10"); 


console.log("\n----- Logical Operators -----")

let y = true;
let z = false;

console.log(y && z); 
console.log(y || z); 
console.log(!z);             


console.log("\n----- Ternary Operators -----")

let mark = 35;

let result = mark >= 40 ? "Pass" : "Fail";

console.log(result);



console.log("\n----- Functions -----")


console.log("\n----- Functions Declaration -----")
function greet() {
    console.log("Hello from Function Declaration");
}
greet();

console.log("\n----- Functions Expression -----")
const welcome = function () {
    console.log("Hello from Function Expression");
};
welcome();


console.log("\n----- Named Functions -----")
const display = function showName() {
    console.log("Named Function");
};
display();


console.log("\n----- Anonymous Functions -----")
const message = function () {
    console.log("Anonymous Function");
};
message();

 
console.log("\n----- Arrow Functions -----")
const add = (a, b) => a + b;
console.log("Arrow Function:", add(10, 20));


console.log("\n----- Parameters -----")
function student(studentName) {
    console.log("Parameter:", studentName);
}
student("John");


console.log("\n----- Arguments -----")
function multiply(num1, num2) {
    console.log("Arguments Result:", num1 * num2);
}
multiply(5, 4);


console.log("\n----- Default Parameters -----")
function country(name = "India") {
    console.log("Country:", name);
}
country();
country("Japan");


console.log("\n----- Rest Parameters -----")
function total(...numbers) {
    let sum = numbers.reduce((acc, value) => acc + value, 0);
    console.log("Rest Parameter Sum:", sum);
}
total(10, 20, 30, 40);


console.log("\n----- Arguments Functions -----")
function showArguments() {
    console.log("Arguments Object:", arguments);
}
showArguments(100, 200, 300);


console.log("\n----- Callback Functions -----")
function processUser(callback) {
    callback();
}
processUser(function () {
    console.log("Callback Function Executed");
});


console.log("\n----- Higher Order Functions -----")
function calculator(operation) {
    console.log("Higher Order Function:", operation(8, 2));
}
calculator((x, y) => x / y);


console.log("\n----- First-Class Functions -----")
function sayHi() {
    return "Hi!";
}
const storedFunction = sayHi;
console.log("First-Class Function:", storedFunction());


console.log("\n----- Recursive Functions -----")
function countDown(numberValue) {
    if (numberValue === 0) {
        return;
    }
    console.log(numberValue);
    countDown(numberValue - 1);
}
countDown(5);


console.log("\n----- Scope -----")
console.log("\n----- Global Scope -----")

let global = "I am Global Scope";

function funGlobal() {
    console.log(global);
}
funGlobal();

console.log("\n----- Function Scope -----")

function funScope(){
    let scope="I am Function Scope";
    console.log(scope);
}

funScope();

console.log("\n----- Block Scope -----")

{
    let blkScope = "I am Block Scope";
    console.log(blkScope);
}

console.log("\n----- Lexical Scope -----")

function out() {
    let outVar = "Outer Variable";
    
    function inner() {
        console.log(outVar);
    }
    
    inner();
}
out();


console.log("\n----- Hoisting -----")

console.log(myVar); 

var myVar = "Hoisted Variable";

sayHello();

function sayHello() {
    console.log("Function Hoisting");
}


console.log("\n----- Closure -----")

function counter() {
    let count = 0;
    
    return function () {
        count++;
        console.log("Count:", count);
    };
}

const increment = counter();

increment();
increment();
increment();


console.log("\n----- IIFE -----");

(function () {
    console.log("IIFE Executed");
})();









































