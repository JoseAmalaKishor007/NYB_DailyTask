console.log('Miscellanous Topic')


//IIFE

num1=28;
num2=78;
function normalIife(a,b){
    let res=a+b;
    console.log('Without IIFE :',res);
}
normalIife(num1,num2);

(function Iife(a,b){
    let res=a+b;
    console.log('With IIFE :',res);
})(num1,num2);


// Function Currying

function normalCurrying(a,b,c){
    console.log('Without Currying :',a+b+c);
}
normalCurrying(80,67,60);

function withCurrying(a){
    return function (b){
        return function(c){
            return a+b+c;
        }
    }
}

console.log('With Currying :',withCurrying(57)(45)(81));

// First Class

// Assigning to a variable

let assignVariable=function (){
    return'This is assigning variable'
}

console.log(assignVariable());

//function passed as a argument to other function
let passFunction=(assign,argument)=>{
    return assign()+' '+argument;
}

console.log(passFunction(assignVariable ,'This is a passed function'));


// function return from another function

let value=function outer(){
    return function inner(){
        console.log('Hlo Boys')
    }
}

value()();


// store function in an array
let arrFunction=[
    function(){
        return('Array Function 1')
    },
    function(){
        return('Array Function 2')
    }
]

console.log(arrFunction[0]());
console.log(arrFunction[1]());




// pure function

function add(a,b){
    return(a+b);
}

console.log(add(5,10));
console.log(add(5,10));


// impure function

let count = 0;

function increment() {
    count++;
}

increment();

console.log(count); 


let food=['Briyani' , 'Fried Rice' , 'Sambar' , 'Curd Rice']

function addFood(menu){
    menu.push('Rasam');
    return menu;
}
console.log(addFood(food))


// reecursion

function countnum(n) {
    if (n === 0) {
        return;
    }

    console.log(n);
    countnum(n - 1);
}

countnum(5);







































