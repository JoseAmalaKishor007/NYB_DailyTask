console.log('Revision Day 3');


console.log('\n----- Object Creation -----');

let obj1={
    name:'Jose Amala Kishor',
    age:22,
    city:'Dindigul',
    course:'CSE',
    cgpa:8.9,
};

console.log(obj1);


console.log('\n----- Object Properties -----');

console.log("Name:", obj1.name);
console.log("Age:", obj1["age"]);
console.log("Age:", obj1.age);


console.log('\n----- Object Methods -----');

let obj2={
    company:'NYB Infotech',
    stack:'JavaScript',
    role:'Software Developer',
    salary:3.25,
    place:'Hydrabad',
    intro:function(){
        console.log('Im Jose, Im working as a ',this.role,' in ',this.company,' at ',this.place,'.')
    }
}

obj2.intro();
console.log(obj2.stack)


console.log('\n----- Nested Objects -----');

const obj3 = {
    id: 101,
    details: {
        department: "CSE",
        location: "India"
    }
};

console.log("Department:", obj3.details.department);


console.log('\n----- Object.keys() -----');

console.log("Keys:", Object.keys(obj2));



console.log('\n----- Object.values() -----');

console.log("Values:", Object.values(obj2));


console.log('\n----- Object.entries() -----');

console.log("Entries:", Object.entries(obj2));


console.log('\n----- Shallow Copy -----');

const org1 = {
    name: "John",
    age: 25
};

const shallowCopy = { ...org1 };

console.log("Shallow Copy:", shallowCopy);



console.log('\n----- Deep Copy -----');

const user = {
    name: "Kishor",
    address: {
        city: "Madurai"
    }
};

const deepCopy = JSON.parse(JSON.stringify(user));

deepCopy.address.city = "Hydrabad";

console.log("Original:", user);
console.log("Deep Copy:", deepCopy);





let heading = document.getElementById("title");
let paragraph = document.querySelector(".text");

console.log(heading);
console.log(paragraph);




























 