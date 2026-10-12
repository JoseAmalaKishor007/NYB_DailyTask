//for loop

for(let i=1;i<5;i++){
    // console.log(i);
}


let fruit=["apple","banana","grapes"];
for(let i=0;i<fruit.length;i++){
    // console.log(fruit[i])
}

for (let i = 10; i >=1; i--) {
    if(i%2!==0){
        // console.log(i);
    }
}

// while loop

let i=1
while(i<=10){
    if(i%3==0){
        // console.log(i); 
    }
    i++
}


// do while
do{
    // console.log(i);
    i++
}while(i<1)

// for in 

let person={
    name:"jose",
    age:22,
    gender:"male",
    phnum:3698741256,
    nation:'India'
}

for(let key in person){
    // console.log(key ,person[key]);   
}

let arr=['jose','amala','kishor','a']

for(let key in arr){
    // console.log(arr[key]);
}

// for of

let color=['Red','Blue','Green','Orange']
for(let shade of color){
    // console.log('Colors : '+ shade);
    
}

// for each loop
let array = [10, 20, 30];

array.forEach(function(num) {
//   console.log(num);
});

// infinite loop
// for(;;){
    // console.log("hii");
    
// }
