console.log('-------Operators-------');
console.log('-------Arithmatic Operators-------');


function add1(a,b){
    return a+b
}
function sub1(a,b){
    return a-b
}
function mul1(a,b){
    return a*b
}
function div1(a,b){
    return a/b
}
function increment1(a){
    a++
    return a
}
function decrement1(a){
    a--
    return a
}

function calc(a,b,callback){
    return(callback(a,b))
}

console.log('a + b =',calc(50,60,add1))
console.log('a - b =',calc(50,30,sub1))
console.log('a * b =',calc(50,60,mul1))
console.log('a / b =',calc(50,10,div1))
console.log('a ++ =',increment1(5))
console.log('a -- =',decrement1(50))


console.log('-------Assignment Operator-------');

let x = 10;
        x += 5;     
        console.log("Assignment (+=):", x);
        
        
        x -= 4; 
        console.log("Assignment (-=):", x);
        

        x *= 5;  
        console.log("Assignment (*=):", x);
        
        
        x /= 10;
        console.log("Assignment (/=):", x);


console.log('-------Comparision Operator-------');

let comp1=74;
let comp2=47;
let comp3=95;
let comp4='47';

console.log(comp1>comp2);
console.log(comp2>comp1);
console.log(comp2==comp4);
console.log(comp2===comp4);
console.log(comp3<=comp2)
console.log(comp3>=comp1)
console.log(comp2>=comp4)
console.log(comp2!=comp4)
console.log(comp2!==comp4)


console.log('-------Logical Operator-------');

// Logical Operator

let logical1=50;
let logical2=75;
let logical3=85;

// AND Operator
console.log(logical1>logical3 && logical3>logical2);
console.log(logical3>logical1 && logical2<logical3);

//OR Operator
console.log(logical1<logical3 ||logical2>logical3);
console.log(logical3<logical1 ||logical2>logical3);

// NOT Operator
console.log(!(logical1>logical3));


console.log('-------Terinary Operator-------');

let terinary1 = 89;

let result = (terinary1 % 2 === 0) ? "Even" : "Odd";

console.log(result);










































































