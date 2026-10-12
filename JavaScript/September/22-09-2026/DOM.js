let head=document.createElement('h1');
head.textContent='Welcome to JavaScript';
document.body.append(head);

let btn=document.createElement('button');
btn.textContent='ClickHear!';
document.body.append(btn)

btn.addEventListener('click',function(){
    console.log('Successfull1')
})
btn.addEventListener('dblclick',function(){
    alert('Saved')
})

let input=document.getElementById('input');
input.addEventListener("input", function () {
    console.log(input.value);
});


console.log("Start");

setTimeout(function () {
    console.log("Middle");
}, 2000);

console.log("End");

function task1(){
    console.log("Task1 Start Execution");
    
    console.log("Task1 Complete Execution");
}
function task2(){
    console.log("Task2 Start Execution");
    setTimeout(function () {
    console.log("Task2 Complete Execution");
    }, 2000);
    
}
function task3(){
    console.log("Task3 Start Execution");
    
    console.log("Task3 Complete Execution");
}

task1();
task2();
task3();


setInterval(function () {
    // console.log("Running...");
}, 1000);


let msg = setTimeout(function () {
    console.log("ClearTimeout()");
}, 5000);

clearTimeout(msg);

console.log("Timer Cancelled");


let loginTimer = setTimeout(function () {
    console.log("Session Expired");
}, 10000);

// User performs an action before timeout
clearTimeout(loginTimer);

console.log("Session Continued");





















