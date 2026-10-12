// for loop
// while loop
// do while loop
// infinite loop
// for in loop
// for of loop

// for loop
for(let i=1;i<=5;i++){
    console.log(i);
}

for(let i=1;i<=20;i++){
    if(i%3==0){
        console.log(i);
    }
}

// while loop
let j=1;
while(j<=5){
    console.log(j);
    j++;
}

let k=1;
while(k<=10){
    if(k%4==0){
        console.log(k);
    }
    k++;
}
let l=10;
do{
    if(l%10==0){
        console.log(l);
    }
    l++;
}
while(l<1)

// for in loop

let student = {
    name: "Jose",
    age: 21,
    department: "CSE"
};

for (let key in student) {
    console.log(key, ":", student[key]);
}

// for of loop
let numbers = [10, 20, 30, 40];

for (let num of numbers) {
    console.log(num);
}