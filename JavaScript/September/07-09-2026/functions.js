// Function Decleration 

function greet(name){
    console.log('Hello '+name)
}

greet('Jose');

let a=5;
let b=4
function add(){
    return a+b;
}
let res=add();
console.log(res)

console.log(`The Addition of ${a} and ${b} is ${res}`)

function addOreven(c){
    if(c%2==0){
        return('The Number is Even');
    }
    else{
        return('The Number is Odd');
    }
}

console.log (addOreven(52));



// Function Expression


let greeting=function(name,course,clg,age){
    return(`My self I'm ${name} ,I had Completed ${course} in ${clg}. Im ${age} yrs Old.`)
}

console.log(greeting('Jose Amala Kishor', 'CSE','RVS College ',22))


let multiply=function mul(d,e){
    return d*e;
}

console.log(multiply(4,5))


//Named Function

let welcome = function welcome(name) {
    console.log("Welcome " + name);
};

welcome("Jose");


// Anonymous Function Expression

let checkNumber = function(num) {
    if (num % 2 === 0) {
        console.log(num + " is Even");
    } else {
        console.log(num + " is Odd");
    }
};

checkNumber(15);
checkNumber(20);


let message = function() {
    console.log("Welcome to JavaScript");
};

message();


// Arrow Functions

let addition = (a, b) => {
    return a + b;
};

console.log(addition(10, 20));


let welcome1 = () => {
    console.log("This is Arrow function");
};

welcome1();

// Oneline Arrow function
let square = num => num * num;

console.log(square(5));























