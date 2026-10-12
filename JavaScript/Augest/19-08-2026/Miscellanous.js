console.log('Jose')

// call back

function add(a,b){
    return a+b;
}

function sub(a,b){
    return a-b;
}

function mul(a,b){
    return a*b;
}


function calc(a,b,callback){
    return callback(a,b);
}

console.log(calc(12,20,add))
console.log(calc(12,20,sub))
console.log(calc(12,20,mul))



function greet(name) {
    console.log("Hello " + name);
}

function processUser(callback) {
    callback("Kishor");
}

processUser(greet);

// Arrow function

const checkEven = num => {
    if (num % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
};

console.log(checkEven(10));


// closure

function counter() {
    let count = 0;

    return function () {
        count++;
        return count;
    };
}

const increment = counter();

console.log(increment()); // 1
console.log(increment()); // 2
console.log(increment()); // 3

// recursion

function count(n) {
    if (n === 0) {
        return;
    }

    console.log(n);
    count(n - 1);
}
count(5);
