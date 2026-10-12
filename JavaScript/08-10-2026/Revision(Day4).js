console.log("----- Asynchronous JavaScript -----")
console.log("----- Synchronous vs Asynchronous JavaScript -----")

// 1. Synchronous JavaScript

console.log("Step 1");
console.log("Step 2");
console.log("Step 3");


// 2. Asynchronous JavaScript

console.log("Start");

setTimeout(function () {
    console.log("Async Task");
}, 2000);

console.log("End");

console.log("----- Call Stack -----")

function first() {
    second();
}

function second() {
    console.log("Inside Second");
}

first();



console.log("----- Callback Queue -----")

console.log("Start");

setTimeout(function () {
    console.log("Callback Queue");
}, 0);

console.log("End");



console.log("----- Microtask Queue -----")

console.log("Start");

Promise.resolve().then(function () {
    console.log("Microtask");
});

console.log("End");



console.log("----- setTimeout() -----")

setTimeout(function () {
    console.log("Executed after 3 seconds");
}, 3000);

 
console.log("----- setInterval() -----")

let intervalId = setInterval(function () {
    console.log("Running every 1 second");
}, 1000);

 
console.log("----- clearTimeout() -----")

setTimeout(function () {
    clearInterval(intervalId);
    console.log("Interval Stopped");
}, 5000);

console.log("----- clearInterval() -----")

let timeoutId = setTimeout(function () {
    console.log("This will not execute");
}, 4000);

clearTimeout(timeoutId);







