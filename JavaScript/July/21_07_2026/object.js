let obj={
    name:'Jose',
    age:22,
    course:'CSE',
    city:'DGL',

    greet:function(a,b){
        return a+b;
    }
}

console.log(obj.greet(10,20));
console.log(obj);
obj.phnum=9344543007;
console.log(obj);

// How to Create an Object?

// i) Object Literal

let college={
    name:'RVS College',
    clgcode:9215,
    students:900,
    course:'CSE,MEC,ECE,EEE',
    status:true,
};

console.log(college.name);
console.log(college);

// objects are dynamics

// add
// delete
// update

dynamic={
    name:'Jose',
    age:22,
    course:'CSE',
    city:'DGL',
}

console.log(dynamic);

dynamic.passedout=2025;  //add
dynamic.age=23;  //update
delete dynamic.city;  //delete

console.log(dynamic);

// Iterating Object

let iterate = {
    name: "Jose",
    age: 22,
    city: "Dindigul"
};

// i)for...in

for (let key in iterate) {
    console.log(key);  //print only the key
    
}
for (let key in iterate) {
    console.log(iterate[key]); //print only the value
}
for (let key in iterate) {
    console.log(key+ ' : '+ iterate[key]);  //print only the key value pairs
}

// ii)Object.keys()
console.log(Object.keys(iterate));

// iii)Object.values()
console.log(Object.values(iterate));

// ii)Object.keys()
console.log(Object.entries(iterate));


// Clone/Copy of an Object

let clone={
    name: "Jose",
    age: 22,
    city: "Dindigul",
    address:{
        village:'Karisalpatti'
    }
}

console.log(clone);
// i)Shallow Copy (Spread operator)

let newClone={...clone};
// delete newClone.address;
console.log(newClone);
   
// ii)Deep copy(Structured clone)

let newClone2=structuredClone(clone);
newClone2.address.village='Bgl';
console.log(newClone2);

// Math Object

console.log(Math.PI); //PI value
console.log(Math.round(4.4));   //nearest Integer
console.log(Math.floor(4.9));   //nearest down
console.log(Math.ceil(4.1));    //nearest up
console.log(Math.trunc(4.9));   //Removes the decimal
console.log(Math.abs(-15));     //positive value
console.log(Math.max(10, 20, 30, 5));  //max value
console.log(Math.min(10, 20, 30, 5));  //min value
console.log(Math.pow(2, 3));    //raised to a power.
console.log(Math.sqrt(25)); //square root
console.log(Math.cbrt(27));     //cube root


// Date in object

let today = new Date();
console.log(today);

let date = new Date(2004, 5, 9); //specific date
console.log(date);

let date2 = new Date("2026-07-21");
console.log(date2);  // using string













