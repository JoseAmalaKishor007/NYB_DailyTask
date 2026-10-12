console.log('Functions')

// function decleration

    let a=47;
    let b=84;
function add(a,b){
    
    return(a+b);
}

console.log(add(a,b));


function name(a,b,c){
    console.log(a,b,c)
}

name('Jose','Amala','Kishor')


// function expression

let fun=function(c,d){
    console.log(c*d);
}

fun(8,5);


// Arrow function
let arrow1=(a,b)=>
{
    return(a+b);
}
console.log(arrow1(20,30))


let arrow2=(d,e)=>d+e;

console.log(arrow2(60,54));


// IIFE (Immediatly invoked function expression)

(function()
{
    console.log("Jose");
})();


// callback

function addition(v1,v2)
{
    return(v1+v2);
}

function subtract(v1,v2)
{
   return(v1-v2);
}

function multiply(v1,v2)
{
    return(v1*v2);
}

function divide(v1,v2)
{
    return(v1/v2);
}


function calc(v1,v2,callback){
    return (callback(v1,v2));
}

console.log(calc(10,20,divide));


function greet(role){
    console.log('Im a',role);
}

function hello(callback){
   callback('Java Developer')
}

hello(greet);


function greeting(name, callback1,callback2) {
    console.log("Hello " + name);
    callback1();
    callback2();
}

function welcome() {
    console.log("Welcome");
}

function thankYou() {
    console.log("Thank You");
}

greeting("John", welcome, thankYou);

































































