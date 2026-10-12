console.log('Modern JavaScript')

console.log('----- Destructuring -----')

const student = {
    name: "Jose",
    age: 22,
    course:"CSE",
};

const { name, age, course } = student;

console.log(name);
console.log(age);
console.log(course);

console.log('----- Spread Operator -----')

const numbers = [10, 20, 30];

const newNum = [...numbers, 40, 50];

console.log(newNum);



console.log('----- Rest Operator -----')

function total(...values) {
    let sum = 0;

    for (let value of values) {
        sum += value;
    }

    console.log("Sum:", sum);
}

total(10, 20, 30);


console.log('----- Optional Chaining -----')

const user = {
    name: "Jose"
};

console.log(user?.name);
console.log(user?.address?.city); // undefined



console.log('----- Template Literals -----')

let empName = "Jose Amala Kishor";
let salary = 50000;

console.log(`Employee ${empName} earns ${salary}`);


console.log('----- Map -----')

const emp = new Map();

emp.set(1, "Kishor");
emp.set(2, "Amala");

console.log(emp.get(1));
console.log(emp);



console.log('----- Set -----')

const num = new Set([10, 20, 20, 30, 30, 40]);

console.log(num);

console.log('----- DOM -----')


console.log('----- Selecting Elements -----')

let heading = document.getElementById("title");
let paragraph = document.querySelector(".text");

console.log(heading);
console.log(paragraph);


console.log('----- Reading DOM Properties -----')

console.log(heading.textContent);
console.log(heading.id);

console.log('----- Updating DOM Elements -----')

heading.textContent = "Welcome to JavaScript";
paragraph.style.color = "blue";


console.log('----- Creating Elements Dynamically -----')

let newElement = document.createElement("p");
newElement.textContent = "New Paragraph Created";

console.log('----- Adding Elements -----')

let container = document.getElementById("container");
container.appendChild(newElement);

console.log('----- Removing Elements -----')


newElement.remove();


console.log('----- DOM Traversing -----')

console.log(container.parentElement);   // Parent
console.log(container.children);        // Children
console.log(container.firstElementChild);
console.log(container.lastElementChild);


console.log("----- Browser Storage -----")

const person = {
    name: "Jose",
    age: 22
};

console.log("----- Local Storage -----")

// Store Data
localStorage.setItem("username", "Jose");

// Get Data
console.log(localStorage.getItem("username"));

// Remove Data
localStorage.removeItem("username");

// Clear All Data
// localStorage.clear();

console.log("----- Session Storage -----")

// Store Data
sessionStorage.setItem("city", "Chennai");

// Get Data
console.log(sessionStorage.getItem("city"));

// Remove Data
sessionStorage.removeItem("city");


// sessionStorage.clear();


console.log("----- JSON.stringify() -----")

let jsonData = JSON.stringify(person);

console.log(jsonData);

console.log("----- JSON.parse() -----")

localStorage.setItem("userData", JSON.stringify(user));

let storedData = localStorage.getItem("userData");

let originalObject = JSON.parse(storedData);

console.log(originalObject);
console.log(originalObject.name);



console.log("----- BOM -----")


console.log("----- Browser Object Model -----")

console.log("Width:", window.innerWidth);
console.log("Height:", window.innerHeight);

console.log("----- Common Browser Objects -----")

console.log("Browser:", navigator.userAgent);

console.log("Current URL:", location.href);

console.log("Screen Width:", screen.width);

console.log("History Length:", history.length);

console.log("----- Output Methods -----")


console.log("Hello from console.log()");

alert("Hello from alert()");

document.write("Hello from document.write()");

document.body.innerHTML += "<h2>Hello from innerHTML</h2>";
 











































