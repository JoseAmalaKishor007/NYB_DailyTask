let prm = new Promise((resolve,reject) =>{
    console.log('Executer Function...');
    resolve("The function execute successfully")
    reject("The function has not execute")
})

prm
.then((result1) =>{
    console.log(result1)
})
.catch((result2)=>{
    console.log(result2)
})


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


// promise.all()

let promise1 = Promise.resolve("JavaScript");
// let promise2 = Promise.reject("Error");
let promise2 = Promise.resolve("HTML");  
let promise3 = Promise.resolve("CSS");

Promise.all([promise1, promise2, promise3])
    .then(function (result) {
        console.log(result);
    })
    .catch(function (error) {
        console.log(error);
    });



// promise.race()

let promise4 = new Promise((resolve,reject) => {
    setTimeout(() => resolve("First"), 3000);
});

let promise5 = new Promise((resolve,reject) => {
    setTimeout(() => reject("Second"), 2000);
});

Promise.race([promise4, promise5])
    .then((result) => {
        console.log(result);
    })
    .catch((error)=> {
        console.log(error)
    })

// Promise.allSettled()

let promise6 = Promise.resolve("JavaScript");

let promise7 = Promise.reject("Error");

let promise8 = Promise.resolve("HTML");

Promise.allSettled([promise6, promise7, promise8])
    .then(function (results) {
        console.log(results);
    });


// Promise.any()

let promise9 = Promise.reject("Error 1");

let promise10 = new Promise((resolve,reject) => {
    setTimeout(() => resolve("Success"), 2000);
});

let promise11 = Promise.reject("Error 2");

Promise.any([promise9, promise10, promise11])
    .then(function (result) {
        console.log(result);
    })
    .catch(function (error) {
        console.log(error);
    });



// async and await

function fetchData() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve("Data Received");
        }, 2000);
    });
}

async function displayData() {

    let result = await fetchData();

    console.log(result);
}

displayData();



























