console.log("----- Promise -----")


console.log("----- Promise Creation -----")

const myPromise = new Promise(function (resolve, reject) {
    let success = true;

    if (success === true) {
        resolve("Promise Fulfilled");
    } else {
        reject("Promise Rejected");
    }
});

myPromise
    .then(function (result) {
        console.log(result);
    })
    .catch(function (error) {
        console.log(error);
    })
    .finally(function () {
        console.log("Promise Completed");
    });

    
console.log("----- Promise Chaining -----")

Promise.resolve(10)
    .then(function (number) {
        return number + 10;
    })
    .then(function (number) {
        return number + 10;
    })
    .then(function (result) {
        console.log("Chaining:", result);
    });


console.log("----- Promise.all() -----")

const promise1 = Promise.resolve("Apple");
const promise2 = Promise.resolve("Banana");
const promise3 = Promise.resolve("Mango");

Promise.all([promise1, promise2, promise3])
    .then(function (result) {
        console.log("Promise.all:", result);
    })
    .catch(function (error) {
        console.log(error);
    });




console.log("----- Promise.race() -----")

Promise.race([
    new Promise(resolve => setTimeout(() => resolve("First"), 1000)),
    new Promise(resolve => setTimeout(() => resolve("Second"), 2000))
])
    .then(function (result) {
        console.log("Promise.race:", result);
    });


console.log("----- Promise.allSettled() -----")

Promise.allSettled([
    Promise.resolve("Success"),
    Promise.reject("Failed")
])
    .then(function (result) {
        console.log("Promise.allSettled:", result);
    });


console.log("----- Promise.any() -----")

Promise.any([
    Promise.reject("Error 1"),
    Promise.resolve("First Successful Result"),
    Promise.resolve("Another Success")
])
    .then(function (result) {
        console.log("Promise.any:", result);
    })
    .catch(function (error) {
        console.log(error);
    });

console.log("----- Async / Await -----")
console.log("----- Async Functions -----")

async function greet() {
    return "Hello JavaScript";
}

greet().then(function (result) {
    console.log("Async Function:", result);
});



console.log("----- Await -----")

function getNumber() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve(100);
        }, 1000);
    });
}

async function displayNumber() {
    let result = await getNumber();

    console.log("Await Result:", result);
}

displayNumber();


console.log("----- Error Handling -----")

function checkAge(age) {
    return new Promise(function (resolve, reject) {
        if (age >= 18) {
            resolve("Eligible");
        } else {
            reject("Not Eligible");
        }
    });
}

async function verifyAge() {
    try {
        let result = await checkAge(20);
        console.log("Age Check:", result);
    } catch (error) {
        console.log("Error:", error);
    }
}

verifyAge();


console.log("----- try-catch-finally -----")

async function data() {
    try {
        let result = await checkAge(15);
        console.log(result);
    } catch (error) {
        console.log("Caught Error:", error);
    } finally {
        console.log("Program Completed");
    }
}

data();








