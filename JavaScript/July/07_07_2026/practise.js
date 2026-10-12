let a=10;
let b=5;

console.log(a+b);

b+=a;
console.log(b);
b-=a
console.log(b);

b*=a
console.log(b);


console.log(10=='10');
console.log(10==='10');
console.log(5!=6);
console.log(5=='5');
console.log(10>5);

console.log(!(5>3));

console.log(-a);

console.log(a);


let c=10;
let d=70;
if(c>d){
    console.log("its great");  
}
else{
    console.log("its low");
}

let drs="green";{
    switch(drs){
        case "red":
            console.log("Not red color");
            break;

         case "black":
            console.log("Not black color");
            break;
            
         case "yellow":
            console.log("Not yellow color");
            break;

         case "blue":
            console.log("Yes it is");
            break;

        default:
            console.log("i dont need");
            
    }
}

let mark=70;

let score=mark<70?"fail":"pass";
console.log(score);

// --------------------------------------------------------


for(let i=1;i<=10;i++){
    // console.log(i);
}

let i=2;
while(i<=20){
    if(i%2==0){
        // console.log(i);
    }
    i++;
}

let k=1;
do{
    console.log(k);
    k++;
}while(k<1)


let human={
    hand:2,
    leg:'two',
    nose:'one',
    fingers:'ten'
}

for(let key in human){
    console.log(key,human[key]);
    
}

let phn=[96,26,30,76,66,93,44,54,30,37]
for(let num of phn){
    console.log('numbers '+num);
    
}







