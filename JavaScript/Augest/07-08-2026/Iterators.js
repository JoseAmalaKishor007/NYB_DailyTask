let num=[1,2,3,4,5]

for(let n of num){
    console.log(n);
}



let num1=[2,4,6,8,0];

let iterator=num1[Symbol.iterator]();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());


let myIterator={
    current:1,
    last:5,
    next(){
        if(this.current <=this.last){
            return {value:this.current++ , done:false}
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

  
let iterat=[10,20,30,40,50]
// for(let number of iterat){
//     console.log(number)
// }

let step2=iterat[Symbol.iterator]()
console.log(step2.next());
console.log(step2.next());
console.log(step2.next());
console.log(step2.next());
console.log(step2.next());
console.log(step2.next());

let iterator2={
    start:10,end:50,
    next(){
        if(this.start <= this.end){
            return{value:this.current+10 , done:false}
        }
        else{
            return{value:undefined , dome:true}
        }
    }
}




