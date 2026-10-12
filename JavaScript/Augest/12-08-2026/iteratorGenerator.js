console.log('Browser API');

let num=[1,2,3,4,5]

let iterate=num[Symbol.iterator]();

console.log(iterate);
console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next()); 
console.log(iterate.next()); 

for(let iterateForof of num){
    // console.log(iterateForof);
}


let customIterator={
    start:11,
    end:15,
    next(){
        if(this.start <= this.end){
            return{value:this.start++ , done:false }
        }
        else{
            return{value:undefined , done:true}
        }
    }

}

console.log(customIterator.next());
console.log(customIterator.next());
console.log(customIterator.next());
console.log(customIterator.next());
console.log(customIterator.next()); 
console.log(customIterator.next()); 


//Generator

function* numbers() {
    yield 1;
    yield 2;
    yield 3;
}
let gen = numbers();

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());

function* generator(){

    let i;
    for(i=1;i<=5;i++){
        yield i;
    } 
}

let res=generator();

console.log(res.next());
console.log(res.next());
console.log(res.next());
console.log(res.next());
console.log(res.next());
console.log(res.next());

function* numbers() {
    console.log("Start");

    yield 10;   // Pause here

    console.log("After 10");

    yield 20;   // Pause here

    console.log("After 20");

    yield 30;   // Pause here

    console.log("Finished");
}

let res1 = numbers();

console.log(res1.next());
console.log(res1.next());
console.log(res1.next());
console.log(res1.next());










