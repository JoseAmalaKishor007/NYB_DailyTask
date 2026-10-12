let obj={
    name:'Jose',
    age:22
}
obj.city='DGL';
obj.age=25;
// delete obj.name;

console.log(obj);

let clg={
    name:'RVS college',
    code:9215,
    place:'Dindigul',
    course:'CSE',
    cgpa:8.4,
    passed:2025,
    backlog:function(){
        return("No backlog")
    }
}
console.log(clg.backlog());
console.log(clg);

for(let key in clg){
    console.log(key) //iterate only keys
}

for(let key2 in clg){
    console.log(clg[key2]); //iterate only values
}


for(let key3 in clg){
    console.log(key3 +' : '+clg[key3]);     //iterate keys and values
}
 
console.log(Object.keys(clg));  //iterate only key in array
console.log(Object.values(clg));  //iterate only values in array
console.log(Object.entries(clg));  //iterate only key and value in array


let obj1={
    name:'Jose',
    age:22,
    city:'DGL',
    state:{
        lang:'Tamil',
    }
}
obj1.state.lang='telugu';
console.log(obj1);


let obj2=structuredClone(obj1);
obj2.age=25
obj2.state.lang='English';
console.log(obj2);
obj2.state

// Garbage Collector

let person = {
    name: "Jose",
    age: 22
};
console.log(person);
person = null;   // Remove the reference

// Template Literal

let a=10;
let b=20;
let res=a+b;

console.log(`the addition of ${a} and ${b} is ${res}`);

console.log('sum ='+ (a+b));  //without template literal
console.log(`Sum= ${a+b}`);     //with template literal

console.log(`Hii my name is 
    Jose amala kishor A ,
    Im 22yrs old
    ThankYou !`)

function greet(aim){
    return(`My aim is to be a ${aim}`)
}
console.log(greet('Programmer :)'));

let hlo = {
    name: "Jose",
    age: 22
};
console.log(`Name: ${hlo.name}, Age: ${hlo.age}`);

// String Object

let str = "JavaScript";

console.log(str.length);
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.charAt(2));
console.log(str.indexOf("S"));
console.log(str.lastIndexOf("a"));
console.log(str.includes("Script"));
console.log(str.startsWith("Java"));
console.log(str.endsWith("Script"));
console.log(str.slice(0, 7));
console.log(str.substring(4, 10));
console.log(str.replaceAll("Java", "JS"));


