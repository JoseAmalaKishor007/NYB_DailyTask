let obj1={
    fname:'Jose',
    sname:'Amala',
    lname:'Kishor A',
    age:22,
    status:false,
    phnum:9344543007,

    fullname:function(){
        return this.fname+' '+this.sname+' '+this.lname
        return `${this.fname} ${this.sname} ${this.lname}`
    },
}

console.log(obj1);
console.log(obj1.phnum);
obj1.city='DGL';
obj1.course='CSE';

console.log(obj1)  
console.log(obj1.fullname()); 

// Using new Object()

let obj2 = new Object();

obj2.name = "Kishor";
obj2.age = 22;

console.log(obj2)

// Constructor Function

function obj3(name, age){
    this.name = name;
    this.age = age;
}
let s1 = new obj3("Amala",22);
console.log(s1);

//  Object.create()
let obj4 = {
    greet(){
        console.log("Hello");
    }
};

let obj = Object.create(obj4); 
obj.greet();

// Objects are Dynamic
let obj5 = {
    name:"Kishor",
    age:22,
    course:'CSE',
    year:2004,
}
console.log(obj5);

delete obj5.age;
console.log(obj5);

// Iterating an Object

let obj6 = {
    name: "John",
    age: 25,
    city: "Chennai"
};

for(let key in obj6){
    console.log(key, obj6[key]);
}

console.log(Object.keys(obj6));









