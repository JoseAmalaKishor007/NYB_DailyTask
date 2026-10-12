let prms=new Promise(function(resolve,reject){
    let fulfill=true;

    if(fulfill){
        resolve('Got Fulfilled')
    }
    else{
        reject('Got Not fulfilled')
    }
})

prms
.then(function(res){
    console.log(res)
})
.catch(function(err){
    console.log(err)
})


function fetchStudentData() {

    return new Promise(function(resolve) {

        setTimeout(function() {

            resolve("Student Data Loaded");

        }, 3000);

    });
}

async function showStudentData() {

    console.log("Loading...");

    let studentResult =
        await fetchStudentData();

    console.log(studentResult);

    console.log("Completed");
}

showStudentData();



// Error Handling with Async/Await

function fetchUserData() {

    return new Promise(function(resolve, reject) {

        reject("Unable to Load User Data");

    });
}

async function displayUserData() {

    try {

        let userResult = await fetchUserData();

        console.log(userResult);

    } catch (errorMessage) {

        console.log("Error:", errorMessage);

    }
}

displayUserData();



let colors = ["Red", "Green", "Blue"];

let [col1, col2, col3] = colors;

console.log(col1);
console.log(col2);
console.log(col3);




let numbers = [10, 20, 30, 40];

let [num1,,num2] = numbers;

console.log(num1);
console.log(num2);


// Object Destructuring


let student = {
    name: "Jose",
    age: 22,
    course: "JavaScript"
};

let { name, age, course } = student;

console.log(name);
console.log(age);
console.log(course);

let person = {
    name: "Kishor",
    address: {
        city: "Dindigul",
        state: "Tamil Nadu"
    }
};

let {
    address: { city, state }
} = person;

console.log(city);
console.log(state);



// Iterators


let FOOD = ["Dosai", "Idly", "pongal", "Porota","Briyani"];

let iterator = FOOD[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
























