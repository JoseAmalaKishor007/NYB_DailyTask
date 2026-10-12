let arr=[1,2,3,4,5];

console.log(arr);

arr.push("jose","amala","kishor");
console.log(arr);

arr.splice(3,0,"CSE");
console.log(arr);

console.log(arr.indexOf(1));

// Methods to Iterate an Array

// for loop
// for...of loop
// forEach()
// map()
// filter()

//for loop
let num=["jose",25,54,"amala","kishor",98,63];

for(let i=0;i<num.length;i++){
    console.log(num[i])
}

//for of loop

for(let x of num){
    console.log(x);
}

// forEach()
let add=[45,25,7,58,87,62,45,62,14]
let great=add[0];
add.forEach(function(addition){
    if(addition>great){
        great=addition;
    }
});
    console.log(great)

// Map 
let num1=[1,2,3,4,5];

let res=num1.map(x => (x)*2);
console.log(num1);
console.log(res);

let res1=num1.map(y=>y*y);
console.log(res1);

// Filter

let a=[12,15,68,74,30,52,87,62,45,65,47]

let res2=a.filter(z=>z>50)
console.log(res2);


// Join Method

let join1=['Jose','Amala','Kishor','A'];
let join2=[1,2,3,4,5];

console.log(join1.join());
console.log(join1.join(' '));
console.log(join1.join('-'));
console.log(join1.join(''));
console.log(join2.join(', '));
console.log(join2.join(''));

// Sorting an Array

let sort1=['Football','Cricket','Volyball','Basketball','Tennis'];
console.log(sort1.sort());

let sort2=[10, 5, 100, 25];
console.log(sort2.sort());

let sort3=[2,5,3,9,4,7,15,36,18]
sort3.sort((a,b)=>a-b);
console.log(sort3); //Ascending order

let sort4=[2,5,3,9,4,7,15,36,18]
sort4.sort((a,b)=>b-a);
console.log(sort4);  //descending order

let students1 = ["John", "Jose", "Arun", "David"];
students1.sort();
console.log(students1);

let students2 = [
  { name: "Jose", marks: 85 },
  { name: "Arun", marks: 70 },
  { name: "John", marks: 90 }
];
students2.sort((a, b) =>b.marks - a.marks);
console.log(students2);

