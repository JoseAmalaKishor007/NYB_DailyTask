let head=document.getElementById('head');
head.style.color='orange';


// setTimeout()
console.log("Start");
setTimeout(() => {
    console.log("Hello after 2 seconds");
}, 2000);

console.log("End");


// setInterval()
let count = 1;

let interval = setInterval(() => {

    console.log(count);

    count++;

    if (count > 5) {
        clearInterval(interval);
    }

}, 1000);



// clearTimeout()
let timer = setTimeout(() => {
    console.log("Hello");
}, 5000);

clearTimeout(timer);

console.log("Timer cancelled");



// clearInterval()

let count1 = 1;

let timer1 = setInterval(() => {

    console.log(count1);

    count1++;

    if (count1 > 3) {
        clearInterval(timer1);
    }

}, 1000);

// DOM API

let button = document.getElementById("button");

button.addEventListener("click", () => {

    document.getElementById("heading").innerHTML =
        "Text Changed";

});


// Fetch API

fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log("Error:", error);
    });

// Local Storage API

localStorage.setItem("name", "Jose");
let name = localStorage.getItem("name");
console.log(name);

// Session Storage API

sessionStorage.setItem("username", "Jose");

let user = sessionStorage.getItem("username");

console.log(user);





















