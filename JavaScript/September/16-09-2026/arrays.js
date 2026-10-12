console.log('Arrays');

console.log('----- MultiDimensional Array-----');

let mark = [
    [85, 90, 78],
    [88, 76, 95],
    [92, 81, 89]
];

console.log("First Student Marks:", mark[0]);
console.log("Second Student First Subject:", mark[1][0]);
console.log("Third Student Third Subject:", mark[2][2]);


let product = [
    ["Laptop", "Mouse", "Keyboard"],
    ["Phone", "Charger", "Earphones"],
    ["TV", "Remote", "Speaker"]
];

console.log("First Product:", product[0][0]);
console.log("Phone Accessory:", product[1][1]);
console.log("TV Accessory:", product[2][2]);


console.log('-----Adding Element in an Array-----');


let fruits = ["Apple", "Banana", "Mango"];

console.log("Original Array:");
console.log(fruits);

// push()
fruits.push("Orange");
console.log("After push():");
console.log(fruits);

// Unshift()
fruits.unshift("Grapes");
console.log("After unshift():");
console.log(fruits);

// Splice()
fruits.splice(2, 0, "Pineapple");
console.log("After splice() for insertion:");
console.log(fruits);

// pop()
fruits.pop();
console.log("After pop():");
console.log(fruits);

// shift
fruits.shift();
console.log("After shift():");
console.log(fruits);

// Splice()
fruits.splice(2, 1);
console.log("After splice() for deletion:");
console.log(fruits);


// length of array

let student = ["Jose", "Amala", "Kishor"];
let subject = ["HTML", "CSS", "JavaScript", "React"];
let markLIst = [10, 20, 30, 40, 50];

console.log("Student Names Length:", student.length);
console.log("Subject List Length:", subject.length);
console.log("Number of Marks Length:", markLIst.length);


// includes(), indexOf(), and lastIndexOf().


let course = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "JavaScript",
    "Node.js"
];

console.log("Original Array:");
console.log(course);

// includes()
console.log("-----Using includes()-----");
console.log("Is HTML available?", course.includes("HTML"));
console.log("Is Python available?", course.includes("Python"));

// indexOf()
console.log("-----Using indexOf()-----");
console.log("First position of JavaScript:", course.indexOf("JavaScript"));
console.log("Position of React:", course.indexOf("React"));
console.log("Position of Python:", course.indexOf("Python"));

// lastIndexOf()
console.log("-----Using lastIndexOf()-----");
console.log("Last position of JavaScript:", course.lastIndexOf("JavaScript"));
console.log("Last position of CSS:", course.lastIndexOf("CSS"));
console.log("Last position of Python:", course.lastIndexOf("Python"));



// Array Empty


let color = ["Red", "Green", "Blue", "Yellow"];

console.log("Original Array:");
console.log(color);

// Method 1: Using length = 0
color.length = 0;

console.log("After length = 0:");
console.log(color);

// Re-create array
color = ["Red", "Green", "Blue", "Yellow"];

// Method 2: Using splice()
color.splice(0, color.length);

console.log("After splice():");
console.log(color);

// Re-create array
color = ["Red", "Green", "Blue", "Yellow"];

// Method 3: Assigning a new empty array
color = [];

console.log("After assigning []:");
console.log(color);


// combining array


let frontend = ["HTML", "CSS"];
let script = ["JavaScript", "TypeScript"];
let backend = ["Node.js", "Express"];

// Using concat()
let allCourse =
    frontend.concat(script, backend);

console.log("Using concat():");
console.log(allCourse);

// Using Spread Operator
let courseSpread = [
    ...frontend,
    ...script,
    ...backend
];

console.log("Using Spread Operator:");
console.log(courseSpread);







































































