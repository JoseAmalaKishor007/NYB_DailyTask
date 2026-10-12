let arr=new Array(5);

arr[0]=10;
arr[1]=20;
arr[2]=30;
arr[3]=40;
arr[4]=50;
console.log(arr);

// for(let i =0;i<5;i++){
//     console.log(arr[i]);
// }

for(let x of arr){
    console.log(x)
}

// Adding Elements

// 1.push()
// 2.unshift()
// 3.Splice()

let fruits=["Apple","Orange"];
console.log(fruits)
// 1.push
fruits.push("Banana");
console.log(fruits);  //Banana added at last

// 2.unshift()
fruits.unshift("Grapes")
console.log(fruits);  //Grapes added at first

// 3.Splice()
console.log(fruits)
fruits.splice(2,1,"Jackfruit");
console.log(fruits)

// Finding of Elements

// let numbers = [10, 20, 30, 20,54,95,30];

// console.log(numbers)
// console.log(numbers.indexOf(95)); //find the index of 95

// console.log(numbers.lastIndexOf(30)) //find the last index of 30 which is appear second time

// console.log(numbers.includes(97)) //if 97 is exists

// console.log(numbers.find(num => num > 54)) //which num is greater then 54

// console.log(numbers.findIndex(num=> num>=30)) //index of the number which is greater then 30


// Removing of Element

// splice()
// filter()
// pop()
// shift()

let numbers = [10, 20, 30, 20,54,95,30];

// splice
numbers.splice(2,1)
console.log(numbers)

// filter()
let num=numbers.filter(numbers=>numbers!==95);+
console.log(num)

// pop()
numbers.pop();
console.log(numbers)

// shift()
numbers.shift()
console.log(numbers);

// Removing of All Elements

// Set length = 0 (Most common)
// splice()
// Assign a new empty array ([])
// Remove elements using a loop (pop())

let number1 = [10, 20, 30, 20,54,95,30];

// Set length = 0 (Most common)
number1.length=0;
console.log("using Lenth as 0 :",number1);

// splice()
let number2 = [10, 20, 30, 20,54,95,30];
number2.splice(0,number2.length)
console.log("Using splice :",number2)

// Combine two or more array

// concat() (Most Common)
// Spread Operator (...)
// push() with Spread Operator

num1=[1,2,3,4,5];
num2=[6,7,8,9,0];
num3=[11,12,13,14,15];

// concat() (Most Common)
let res1 =num1.concat(num2,num3);
console.log(res1);

// Spread Operator (...)
let res2=[...num1, ...num2,...num3];
console.log(res2)

// push() with Spread Operator

num1.push(...num2,...num3);
console.log(num1);

// Copy of an Array

// Spread Operator (...)
// slice()
// Array.from()
// concat()

// Spread Operator (...)

let copy=[10,20,30,40,50];

let copy2=[...copy];
copy2.push(60);
console.log(copy);
console.log(copy2);

// slice()
let copy3=copy.slice();
console.log(copy);
copy3.push(70);
console.log(copy3);

// Array.from()
let copy4 = Array.from(copy);
console.log(copy4);

// concat()
let copy5 = copy.concat();
console.log(copy5);

// Methods to Iterate an Array

// for loop
// for...of loop
// forEach()
// map()
// filter()

let country=["India","US","Africa","Japan","China"]

// for loop
for(let i=0;i<country.length;i++){
    console.log(country[i]);
}

// for...of loop

let jose=["Jose","Amala","Kishor A","CSE",2025];
for(let x of jose){
    console.log(x);
}

// forEach()
jose.forEach(jose =>{
    console.log(jose);
});
