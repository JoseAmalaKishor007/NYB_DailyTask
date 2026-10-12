console.log('Iterators');

let num=[5,10,15,20,25]

for(let res of num){
    console.log(res);
}

let iterate=num[Symbol.iterator]();
console.log(iterate.next())
console.log(iterate.next())
console.log(iterate.next())
console.log(iterate.next())
console.log(iterate.next())
console.log(iterate.next())

function* gen(){
    let i=1;
    while(i<=5){
        yield i++;
    }
}

let genFun=gen();
console.log(genFun.next());
console.log(genFun.next());
console.log(genFun.next());
console.log(genFun.next());
console.log(genFun.next());
console.log(genFun.next());















