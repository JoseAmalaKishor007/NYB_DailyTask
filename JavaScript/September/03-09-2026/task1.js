
// Function without parameters
function greet() {
    console.log("Welcome to JavaScript Functions");
}
greet();

function role() {
    console.log("My role is to work for NYB");
}
role();


// Function with parameters
function student(name, course) {
    console.log("Name:", name);
    console.log("Course:", course);
}

student("Jose", "JavaScript");
student("Amala", "React");


// Default Parameters
function calculate(amount, tax = 18) {
    let total = amount + (amount * tax / 100);
    console.log("Total Bill:", total);
}

calculate(1000);      // Uses default tax
calculate(1000, 12);  // Uses provided tax