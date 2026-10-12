console.log('-------Scope-------')

 
console.log('Global Scope')
let name = "Jose Amala Kishor";
let num=50;

function showName() {
    console.log(name);
}
showName();

if(num %2 ==0){
    console.log('Even Number')
}
else{
    console.log('Odd Number')
}



console.log('Function Scope')

function display() {
    let age = 20;
    console.log(age);
}
display(); 

// console.log(age);  //Gives as error

function msg() {
    let message = "Hello, JavaScript!";
    console.log(message);
}
msg(); 
// console.log(message)



console.log('BLock Scope')

{
    let mark= 54;
    console.log(mark);
}
// console.log(mark);

let rice=84;

if(rice >50){
    console.log('The amount of rice is High, Need to Reduce the Weight')
    let reduceWeigth=rice-50;
    console.log('The Reduced Weight is ',reduceWeigth);
}
else{
    console.log('The amount of rice is Low, Need to Increase the Weight')
    let increaseWeight=50-rice;
    console.log('The Increased Weight is ',increaseWeight);
}

console.log(rice)
// console.log(reduceWeigth)
// console.log(increaseWeight)





// Recursive Functions

console.log('-------Recursive Functions-------');


console.log('Factorial Numbers');

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

console.log(factorial(5));


console.log('Sum of N numbers');

function sum(n) {
    if (n === 1) {
        return 1;
    }
    return n + sum(n - 1);
}

console.log(sum(5));


console.log('Printing 1 to N numbers');

function printNumbers(n) {
    if (n === 0) {
        return;
    }

    printNumbers(n - 1);
    console.log(n);
}

printNumbers(5);






































