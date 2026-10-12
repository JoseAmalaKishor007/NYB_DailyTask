let a=[1,2,3,4,5];
console.log(a);  

let b=['jose','amala',"kishor",'A'];
console.log(b);
console.log(b[0]);
console.log(b[1]);
console.log(b[2]);
console.log(b[3]);

// Adding Element

a.push(6);
console.log(a);

a.splice(7,0,7);
console.log(a);

//Finding of

console.log(a.indexOf(3));
console.log(a)

console.log(a.includes(9));

// Removeing Element

a.splice(3,1);
console.log(a);

// Removeing all Element

a.splice(0,a.length);
console.log(a)

// combining 2 element

let c=[1,2,3,4,5];
let d=[6,7,8,9,10];

let cat =c.concat(d);
console.log(cat)

let cat2=[...c,...d]
console.log(cat2)

// copy

let copy=[...c];
console.log(copy);
copy.pop();
console.log(copy);
console.log(c);

// Iteration

// for loop
// for..of loop
// forEach loop
// Map()
// filter()


let e=[1,2,3,4,5];
let f=[6,7,8,9,10];

for(let i=0;i<e.length;i++){
    console.log(e[i]);
}

for(let x of f){
    console.log(x)
}

f.forEach(each=>{
    console.log(each*2)
})

let map=f.map(maping=>maping*10)
console.log(map)

let res=cat2.filter(fill=>fill%2==0)
console.log(res)

//join

let g=['jose','amala',"kishor"];

console.log(g.join());
console.log(g.join(''));
console.log(g.join('-'));
console.log(g.join(' '));

// sort

let h=[2,4,8,6,5,57,6,12,14,97,9,5,1,3,54];
console.log(g.sort());

h.sort((a,b)=>a-b);
console.log(h);

let i=[
    {name:'hari',mark:92},
    {name:'guru',mark:57},
    {name:'praveen',mark:84},
    {name:'anish',mark:97},
    {name:'jose',mark:78},
]
i.sort((a,b)=> b.mark-a.mark);
console.log(i);

//Testing

//i)every
//ii)some

let j=[2,4,8,654,5];
console.log(j.every(num=>num%2==0));

console.log(j.some(num=>num%2==0));

let k=[4,8,6,3,4,7,96,4,765,74]

console.log(k.filter(num=>num>20))

// Reduce

let l=[10,20,30,40,50];
let res1=l.reduce((num,x)=>num+x,0);
console.log(res1)

let res2=l.reduce((num2,x)=>num2*x);
console.log(res2)

// Flattenning of  array

  let arr=[1,2,[3,4],5]; //flat Array
console.log(arr.flat());

let arr2=[1,2,[3,[4,5],6],7]; //2level Array
console.log(arr2.flat(2));

let arr3=[1,2,[3,[4,5],6],7,[8,9,10]]; //3level Array
console.log(arr3.flat(3));

// flatmap()

let arr4=[1,2,3,4,5];
let res8 =arr4.flatMap(fahh=>[fahh,fahh*2]);
console.log(arr4)
console.log(res8);

