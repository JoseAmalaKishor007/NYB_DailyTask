console.log('-----Data Types-----')


console.log('-----Primitive DataTypes-----')
console.log('-----1)String-----')

let str1='Jose Amala Kishor';
let str2='Java Developer';
let str3='NYB Infotech'

console.log('Hii im',str1,',im working as a',str2,'in',str3)

let str4='Javascript';
let n=5;
console.log('The length of the string  :',str4.length)
console.log('The uppercase of string  :',str4.toUpperCase());
console.log('The',n,'letter of string  :',str4.charAt(n));
console.log('The typeof str1 is :',typeof(str1));


console.log('-----2)Integer-----')

let int1=85;
let int2=41;

let res1=int1+int2;
console.log(res1);

let int3=84;

if(int3%2==0){
    console.log('The number is Even');
}
else{
    console.log('The number is Odd');
}

console.log('The typeof int3 is :',typeof(int3));



console.log('-----3)Boolean-----')

let bool1=25;
let eligible=bool1>18
console.log(eligible);

let bool2='male';
let gender=bool2=='male'
console.log(gender);

let bool3=54;
let bool4=84;

let greater=(bool3>bool4);
console.log(greater);

console.log('The typeof gender is :',typeof(gender))

console.log('-----4)Undefined-----')

let undef1;
console.log(undef1);

let undef2;
console.log(undef2);

console.log('The typeof undef2 is :',typeof(undef2))


console.log('-----5)Null-----')

let null1=null;
console.log(null1);

let null2 = "Jose";
console.log(null2);
null2 = null;
console.log(null2);

console.log('The typeof null1 is :',typeof(null1))


console.log('-----6)BigInt-----')

let big1=4546876516876984651687n;
console.log(big1);

let big2=168797621471484125464567n;
let big3=547478;

let res2=(big1+big2);
console.log(res2);

console.log('The typeof big2 is :',typeof(big2))


console.log('-----7)Symbol-----')

let sym1=Symbol("userId");
console.log(sym1);

let sym2 = Symbol("test");
let sym3 = Symbol("test");
console.log(sym2 === sym3);

console.log('The typeof sym2 is :',typeof(sym2))


console.log('===================================')

console.log('-----Non-Primitive DataTypes-----')
console.log('-----1)Object-----')

let obj1={
    name:'Jose',
    age:22,
    coures:'CSE',
    city:'Dindigul',
}

console.log(obj1.name)
console.log(obj1)

obj1.pincode=624705; //add
obj1.age=26;  //update
delete obj1.coures
console.log(obj1)
console.log('The typeof obj1 is :',typeof(obj1))


console.log('-----2)Array-----')

let array1=['Java','HTML','CSS','JavaScript','React'];

console.log(array1[0]);
console.log(array1[3]);

array1.push('Python')
console.log(array1)
array1.pop();
console.log(array1)

console.log(array1.lengt)

console.log('The typeof array1 is :',typeof(array1))


console.log('-----3)Function-----')

function fun1(a,b){
    return a+b;
}
console.log(fun1(50,61));

console.log('The typeof fun1 is :',typeof(fun1))


console.log('-----4)Date-----')

let date1 = new Date();

console.log("Year:", date1.getFullYear());
console.log("Month:", date1.getMonth() + 1);
console.log("Date:", date1.getDate());

console.log('The typeof date1 is :',typeof(date1))

console.log('-----5)Map-----')

let map1 = new Map();

map1.set("name", "Jose");
map1.set("age", 22);
map1.set("course", "JavaScript");

console.log(map1);

console.log('The typeof map1 is :',typeof(map1))


console.log('-----6)Set-----')

let set1 = new Set();

set1.add(10);
set1.add(20);
set1.add(30);

console.log(set1);

console.log('The typeof set1 is :',typeof(set1))














































































