// Datatype
// i) Premitive datatype
// ii) Non Premitive datatype

// 1) Premitive datatype

// *String
// *Int
// *Boolean
// *undefined
// *NUll
// *BigInt

// *String

let str1='Jose'
let str2='Amala'
let str3='Kishor'

console.log(str1)
console.log(str2)
console.log(str3)

// *Int

let int1=20;
let int2=54;
let int3=89;
console.log(int1)
console.log(int2)
console.log(int3)

// *Boolean
let male=true;
let female=false;

console.log(male);
console.log(female);

// *undefined
let und;
console.log(und);

// *NUll
let happy=null;
console.log(happy);

// *BigInt
let big=324658432466646624321989846513132n;
console.log(big);

// ii) Non Premitive datatype

// *object
// *Array
// *Function
// *Date
// *Map
// *Set

// *object
 
let obj={
    name:'Jose', mark:51,course:"CSE"
}
obj.city="DGL";

console.log(obj);
    
// *Array
let arr=['Amma','appa','Sister',55,51,19];
console.log(arr);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);

// *Function

function fun(){
    console.log('This is function')
    console.log(typeof fun)
}
fun();


function sum(a,b){
    return a+b;
}
console.log(sum(10,5));

// *Date
let today=new Date();
console.log("Year :",today.getFullYear());
console.log("Date :",today.getDate());
console.log("Month :",today.getMonth()+1);

// *Map
let me=new Map();
me.set("name",'jose');
me.set("age",22);
me.set("city",'dgl');
me.set("course",'CSE');
console.log(me);

me.delete("age");
console.log(me);
