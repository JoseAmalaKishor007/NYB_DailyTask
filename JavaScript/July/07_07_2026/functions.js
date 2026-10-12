//functions

function greet(){
console.log("Hello JS");
}
greet();

function name(fname,lname){
    let self="Hello Im "+fname+" "+lname;
    console.log(self);
}
name("Jose Amala","Kishor A");


function math(a,b){
    return a+b;
}
let result=math(100,20);
console.log(result);

//function Decleration
// Normal form of function

function hlo(x,y){
    return x*y;
}
let res=hlo(20,60);
console.log(res);

// Name Function Expression
// the function store in a variable with function name

// let store=function sayhi(){
//     console.log("hello world")
// }
// store();

// Anonymous Expression
// the function store in a variable without function name

let store=function(i){
    if(i%2==0){
        return "yes";
    }
    else{
        return"no";
    }
}
let ans=store(54);
console.log(ans)

