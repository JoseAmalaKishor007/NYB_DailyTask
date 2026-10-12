
// Rest Parameters
function totalMarks(...marks) {

    let total = 0;

    for(let mark of marks) {
        total += mark;
    }

    console.log("Total Marks:", total);
}

totalMarks(80, 75, 90, 85);


// Rest Parameter with Normal Parameter
function employee(name, ...skills) {

    console.log("Employee:", name);

    console.log("Skills:");

    for(let skill of skills) {
        console.log(skill);
    }
}

employee("Jose", "HTML", "CSS", "JavaScript", "React");


// Arguments Object Example
function demo() {
    console.log(arguments);
}

demo(10, 20, 30);