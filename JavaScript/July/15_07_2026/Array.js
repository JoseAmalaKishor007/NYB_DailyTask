let a=[5,6,7,8,9,10]
console.log(a);

// sort

let b=['Jose','Amala','Kishor','A'];
console.log(b.sort());

let c=[5,7,2,1,0,8,11];
console.log(c.sort());

c.sort((a,b)=>a-b);
console.log(c);

c.sort((a,b)=>b-a);
console.log(c);

let d=[
    {name:'Jose' , mark:95},
    {name:'Amala' , mark:88},
    {name:'Kishor' , mark:73},
    {name:'A' , mark:96},
]

d.sort((a,b) => b.mark-a.mark);
console.log(d);

// Testing of an Array Elements

// 1.every()

let num=[30,50,84,35,53,18];
let res=num.every((num => num>=18));
console.log(res);
     
// 2.some()

let num2=[12,57,62,15,18,34,62,54];
let res1=num2.some((num => num>80));
console.log(res1);

// Filtering of an Array

let e=[45,4,17,46,8,16,86,65,25,3,65,35,12];
console.log(e.filter(e=>e%2==0));


let f=['jose','mani','may','swe','kavi','hari'];
let res3=f.filter(f=>f.startsWith('m'))
console.log(res3);

let g=[
    {name:'anish',mark:95},
    {name:'guru',mark:56},
    {name:'surend',mark:75},
    {name:'sakthi',mark:88},
    {name:'praveen',mark:74},
]
let res4=g.filter(g=>g.mark>85);
console.log(res4);

// reduce()
let numbers = [10, 20, 30, 40];

let sum = numbers.reduce((total, num) => total + num, 0);

console.log(sum);

let number = [10, 50, 30, 80, 20];

let max = number.reduce((largest, num) =>
    largest > num ? largest : num
);

console.log(max);

// flattenning

let arr=[1,2,[3,4],5]; //flat Array
console.log(arr.flat());

let arr2=[1,2,[3,[4,5],6],7]; //2level Array
console.log(arr2.flat(2));

let arr3=[1,2,[3,[4,5],6],7,[8,9,10]]; //3level Array
console.log(arr3.flat(3));

// flatmap()

let arr4=[1,2,3,4,5];
let res8 =arr4.flatMap(fahh=>[fahh,fahh*2]);
console.log(arr4)
console.log(res8);












