// for Loop
console.log('-------For Loop-------')
for(let for1 = 1; for1 <= 5; for1++) {
    console.log(for1);
}

for(let for2 = 1; for2 <= 10; for2++) {
    if(for2%2==0){
        console.log(for2);
    }
}


console.log('-------While Loop-------')
// while Loop

let while1 = 1;

while(while1 <= 5) {
    console.log(while1);
    while1++;
}

let while2 = 1;

while(while2 <= 20) {
    if(while2 % 2 === 0) {
        console.log(while2);
    }
    while2++;
}


console.log('-------Do-While Loop-------')
// do...while Loop

let do1 = 1;
do {
    console.log(while1);
    while1++;
} while(while1 <= 5);

let do2 = 1;
let sum = 0;

do {
    sum += do2;
    do2++;
} while(do2 <= 5);

console.log(sum);


console.log('-------For-in Loop-------')
// for...in Loop

let forIn1 = {
    name: "Jose",
    age: 22
};

for(let key in forIn1) {
    console.log(key, forIn1[key]);
}



console.log('-------For-of Loop-------')
// for...of Loop

let forOf1 = ["JavaScript","Java", "Html", "Css","Python"];

for(let fruit of forOf1) {
    console.log(fruit);
}


console.log('-------For-Each Loop-------')
// forEach() Loop (Array Method)

let forEach1 = [10, 20, 30];

forEach1.forEach(function(num) {
    console.log(num);
});
















































































