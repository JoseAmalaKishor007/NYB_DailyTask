console.log('-------------------Operators-------------------')

//Arithmetic Operation
  
let a=30;
let b=20;

function add(){
    return a+b;
}
function sub(){
    return a-b;
}
function mul(){
    return a*b;
}
function div(){
    return a/b;
}
function increment(b){
    b++;
    return b;
}
function decrement(a){
    a--;
    return a;
}

console.log('Addition of a and b is : ',add(a,b));
console.log('Subtraction of a and b is : ',sub(a,b));
console.log('Multiplication of a and b is : ',mul(a,b));
console.log('Division of a and b is : ',div(a,b));
console.log('Increment of b is : ',increment(b));
console.log('Decrement of a is : ',decrement(a));


//Assignment Operator

  let x = 10;
        x += 5;     // x=x+5
        console.log("Assignment (+=):", x);
        
        
        x -= 4; //bcz here x is 15 so x = 15-4
        console.log("Assignment (-=):", x);
        

        x *= 5;     // x = 11 (11*5)=55
        console.log("Assignment (*=):", x);
        
        
        x /= 10; // x= 55 (55 /10)=5.5
        console.log("Assignment (/=):", x);
        
// Comparission Operators 
    
let j=41;
let k=84;
let l=75;
let m='84';

console.log(comp1>comp2);
console.log(comp2>comp1);
console.log(comp2==comp4);
console.log(comp2===comp4);
console.log(comp3<=comp2)
console.log(comp3>=comp1)
console.log(comp2>=comp4)
console.log(comp2!=comp4)
console.log(comp2!==comp4)

// Logical Operator

let e=50;
let f=75;
let g=85;

// AND Operator
console.log(logical1>logical3 && logical3>logical2);
console.log(logical3>logical1 && logical2<logical3);

//OR Operator
console.log(logical1<logical3 ||logical2>logical3);
console.log(logical3<logical1 ||logical2>logical3);

// NOT Operator
console.log(!(logical1>logical3));







































