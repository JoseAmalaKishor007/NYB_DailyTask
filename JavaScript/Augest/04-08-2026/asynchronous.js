function fun1(){
    console.log("Fun1 Execution Starts ")
    console.log("Fun1 Execution Ends ")
}

function fun2(){
    console.log("Fun2 Execution Starts ")
    let start=Date.now();
    let delay=5000;
    let ends=start+delay;
while(Date.now() <=ends){
}
    console.log("Fun2 Execution Ends ")
}

function fun3(){
    console.log("Fun3 Execution Starts ")
    let start=Date.now();
    let delay=3000;
    let ends=start+delay;
while(Date.now() <=ends){
}
    console.log("Fun3 Execution Ends ")
}

function fun4(){
    console.log("Fun4 Execution Starts ")
    console.log("Fun4 Execution Ends ")
}


// Program always in synchoronous
fun1();
fun2();
fun3();
fun4();

console.log('This is asynchronous')

// Making the pogram into Asynchoronous
fun1();
setTimeout(fun2,5000);
setTimeout(fun3,2000)
fun4();







