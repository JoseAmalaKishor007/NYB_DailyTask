console.log('--------Function Declaration-------');


function name(a,b,c){
    console.log(a,b,c)
}

name('Jose','Amala','Kishor')

function greet() {
    console.log("Hello, Welcome!");
}
greet();


console.log('--------Function Expression-------');
let add = function(a, b) {
    return a + b;
};
console.log(add(10, 20));

let fun=function(c,d){
    console.log(c*d);
}
fun(8,5);

console.log('--------Anonymous Function-------');
let msg = function() {
    console.log("This is an Anonymous Function");
};
msg();

console.log('--------Arrow Function-------');

const arrow = () => {
    console.log("Hello");
};
arrow();

console.log('--------Singleline Arrow Function-------');

const single = (a, b) => a + b;

console.log(single(10, 20));

console.log('--------Immediately Invoked Function Expression (IIFE)-------');

(function() {
    console.log("IIFE Executed");
})();

console.log('--------Callback Function-------');


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


console.log('--------Parameter-------');

function para(p1, p2) {
    console.log(p1 + p2);
}

para(10, 20);


console.log('--------Arguments-------');

function argu(a1, a2) {
    console.log(a1 + a2);
}

argu(10, 20);

console.log('--------Rest Parameters-------');

function adding(...numbers) {
    let total = 0;

    for(let num of numbers) {
        total += num;
    }

    return total;
}

console.log(adding(10, 20, 30, 40));






























































































