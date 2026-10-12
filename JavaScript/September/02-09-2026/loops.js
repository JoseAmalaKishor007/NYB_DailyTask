// for loop
console.log('-------For Loop-------')

console.log('Program 1')
let a;

for(a=1;a<=10;a++){
    console.log(a)
}

console.log('Program 2')

let b;

for(b=1;b<=10;b++){
    if(b%2==0){
        console.log(b)
    }
}


console.log('-------While Loop-------')

let c=1;
while(c<=20){
    if(c%3==0){
        console.log(c)
    }
    c++;
}


console.log('-------Do-While Loop-------')


let d = 1;

do {
    if(d % 5 == 0){
        console.log(d);
    }
    d++;
} while(d <= 20);


console.log('-------For-in Loop-------')

let greet = {
    name: "John",
    age: 20,
    course: "BCA"
};

for(let key in greet){
    console.log(key, ":", greet[key]);
}


console.log('-------For-of Loop-------')

let fruits = ["Apple", "Banana", "Orange"];

for(let fruit of fruits){
    console.log(fruit);
}






