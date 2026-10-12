//Function Decleration

function jose(){
    console.log("Hii Jose");
}
jose();

// function with return
function add(a,b){ 
    return a+b;
}
let ans=add(100,20);
console.log(ans);

// Function Expression
    //  1.Name Expression

const nameExpFun=function greet(fname,sname){
    return(fname+" "+sname)
}
console.log(nameExpFun("jose","kishor"));


    // Anonymous Expression

const amanoExpFun=function(x,y){
    return x+y
}
console.log(amanoExpFun(50,50));

// Arrow Expression

const square=(k,l)=>{
    console.log(k/l);
}
square(10,5);


// Parameter VS Argument

function kishor(name){ //here name is Parameter
    console.log(name);
}
kishor("My Name is Jose") //here "My Name is Jose" is Argument


// Default Parameter
function greet(name="Default Parameter"){
    console.log(name);
}
greet();
greet("Kishor")

// Rest Parameter

function sumNum(...addNum){
    let sum=0;
    for(let i=0;i<addNum.length;i++){
        sum=sum+addNum[i];
    }
    return sum;
}
let res=sumNum(1,2,3,4,5);
console.log(res);

function max(...findMax){
    let greatest=findMax[0];
    for(let i=1;i<findMax.length;i++){
        if(findMax[i]>greatest){
            greatest=findMax[i];
        }
    }
    return greatest;
}

let result=max(5,6,87,251,984,54,65,654,4668);
console.log(result);

// Spread operator

let obj1 = { name: "Jose", age: 22 };
let obj2 = { ...obj1 };

console.log(obj2);

let number=[1,2,3,4,5];
console.log(...number);

let num1=[1,2,3,4,5];
let num2=[6,7,8,9,10];
console.log(...num1,...num2);


function add1(a, b, c) {
  return a + b + c;
}
let nums = [5, 10, 15];
console.log(add1(...nums));

function sum(...numbers) {
  let total = 0;
  for (let num of numbers) {
    total += num;
  }
  return total;
}

console.log(sum(1, 2, 3));       // 6
console.log(sum(10, 20, 30, 40)); // 100

