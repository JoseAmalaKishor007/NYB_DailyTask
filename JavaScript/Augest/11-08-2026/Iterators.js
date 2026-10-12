console.log("Let's Learn Iterators and Generators")

let head=document.getElementById('head');
head.style.color='blue';

let num=[10,20,30,40,50];
let itertate=num[Symbol.iterator]();
console.log(itertate.next());
console.log(itertate.next());
console.log(itertate.next());
console.log(itertate.next());
console.log(itertate.next());
console.log(itertate.next());

let num1=[1,2,3,4,5]

for(forIterate of num1){
    console.log(forIterate)
}

let myIterator={
     start:1,
     end:10,
     next(){
        if(this.start <= this.end){
            let value=this.start 
            this.start+=2;
            return{Value:value , done:false}
        }
        else{
            return{value:undefined , done:true}
        }
     }
}

console.log(myIterator.next());
console.log(myIterator.next());
console.log(myIterator.next());
console.log(myIterator.next());
console.log(myIterator.next());
console.log(myIterator.next()); 


// Generators

function* numbers() {
    yield 1;
    yield 2;
    yield 3;
}

let result = numbers();

console.log(result.next());
console.log(result.next());
console.log(result.next());
console.log(result.next());



function* count() {

    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;

}

let gen = count();

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());

function* numbers() {

    yield 10;
    yield 20;
    yield 30;
    yield 40;

}

for (let value of numbers()) {
    console.log(value);
}


function* fruits() {

    yield "Apple";
    yield "Mango";
    yield "Orange";
    yield "Banana";

}
let fruitGenerator = fruits();
console.log(fruitGenerator.next().value);
console.log(fruitGenerator.next().value);
console.log(fruitGenerator.next().value);
console.log(fruitGenerator.next().value);










