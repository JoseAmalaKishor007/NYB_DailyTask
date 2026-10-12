let a=[1,2,3,4,5];
console.log(a);

// Removing duplicate elements

let b=[1,2,1,3,4,3,5,6,7,8,5,6,8,9,10];
let remove=[...new Set(b)];
console.log(remove);

let c=[2,5,7,2,1,4,6,4,9,8,3,8,7,5,4,2,3,8,9,6,8,7,4,2,3,6,2,5,7,8,9,1,2,4,7,8,7,2,6,3,1,7,9,5,6,2,1,4,1,0,7,3,1,0,8,7,6,10,7,9,5,3,6,4,0,10,7];

let remove1=[...new Set(c)];
console.log(remove1);

let asce=remove1.sort((a,b)=>a-b);
console.log(asce)
