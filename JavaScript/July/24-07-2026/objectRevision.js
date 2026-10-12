let obj = {
    name:'Jose',
    age:'22',
    alive:true,
    greet:function(a,b){
        return (a+b);
    }
}
obj.city='DGL';
obj.age=25;
delete obj.name;
console.log(`The answer of function is ${obj.greet(5,10)}`)
console.log(obj);

let obj2 ={
    clg:'RVS',
    yr:2025,
    code:9215,
    course:'CSE',
}
console.log(obj2);
for(let keys in obj2){
    console.log(keys)
}
for(let keys in obj2){
    console.log(obj2[keys])
}
for(let keys in obj2){
    console.log(keys , obj2[keys])
}

console.log(Object.keys(obj2));
console.log(Object.values(obj2));
console.log(Object.entries(obj2));

let obj3 ={
     name:'Jose',
    age:'22',
    address:{
        city:'Dindigul',
    }
}
console.log(obj3);

let obj4={...obj3};

obj4.age=24;
// obj4.address.city='Madurai';
console.log(obj4);

let obj5=structuredClone(obj3);
obj5.address.city='Chennai';
console.log(obj5);

console.log(Math.round(3.4));
console.log(Math.floor(5.1));
console.log(Math.ceil(5.2));
console.log(Math.trunc(8));
console.log(Math.abs(-65));
console.log(Math.max(5,8,6,4,9,10,36,4));
console.log(Math.min(5,8,6,4,9,10,36,4));
console.log(Math.sqrt(64));
console.log(Math.cbrt(27));

let obj6={
    name:'Kishor',
    age:25,
    city:'Dgl'
}
console.log(obj6);
obj6=null;
console.log(obj6);


let str = "JavaScript";
console.log(str.length);
console.log(str.toUpperCase());
console.log(str.charAt(2));
console.log(str.indexOf("S"));
console.log(str.lastIndexOf("a"));
console.log(str.includes("Script"));
console.log(str.startsWith("Java"));
console.log(str.endsWith("Script"));