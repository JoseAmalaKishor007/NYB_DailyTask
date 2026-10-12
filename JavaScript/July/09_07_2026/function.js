function jose(a){
    console.log(a);
}
jose(10);

const name=function kishor(a,b){
    return a+b;
}
console.log(name(10,20));

const sum=(k,l)=>{
   return(k+l);
}
let res =sum(65,85);
console.log(res);

function mine(name='Default'){
    console.log(name);

}
mine('Jose');

function restPara(...numbers){
    console.log(numbers);
    
}
restPara(10,20,30,50,72,90,50,74,);

let arr=[12,50,869,920,75,63,18]
console.log(...arr);
let count=0;
for(let i=0;i<arr.length;i++){
    count=count+arr[i];
}
console.log(count);

let arr1=[1,2,3,4,5];
let arr2=[6,7,8,9,10];

console.log(arr1);
console.log(arr2);
console.log('Spreads array and merge it:',...arr1,...arr2);

// Scope
// |--> 3 Types
// 1.Global Scope
// 2.Function Scope
// 3.Block Scope

// 1.Glopbal Scope

let degree='BE Cse';

function global(){
    console.log("Global Scope :",degree);
}
global();
console.log("Normal Printing :",degree);

// 2.Function Scope
function funct(){
    const fun='jose';
    console.log('function Scope :',fun);
}
funct();
// console.log(fun); 
// //it will not execute bcz the 
//  fun variable is access inside the funct function only

// 3.Block Scope

function blockScope1(num){
    for(let i=1;i<=num;i++){
        console.log(i);
    }
    // console.log(i);
    // line 76 will not print bcz the datatype is let it will able to acess only inside the block not outside
}
blockScope1(5);

function blockScope2(num){
    for(var i=6;i<=num;i++){
        console.log(i);  
    }
    console.log('The Final value of i is :',i);
    // line 85 will print bcz the datatype is var it will able to acess outside the block but not outside the function
}
blockScope2(10);

// Hoisting     











   



















