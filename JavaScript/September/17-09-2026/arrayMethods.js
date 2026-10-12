console.log('-----Array Methods-----')


console.log('-----for, for...of, and forEach()-----')

let language = [
    "HTML",
    "CSS",
    "JavaScript",
    "React"
];

console.log("Original Array:");
console.log(language);


//for Loop
console.log("Using for Loop:");

for (let i = 0; i < language.length; i++) {
    console.log(
        "Index:",
        i,
        "Value:",
        language[i]
    );
}


//for...of
console.log("Using for...of Loop:");

for (let langName of language) {
    console.log(langName);
}


//forEach()
console.log("Using forEach() Method:");

language.forEach(function (language2, j) {
    console.log(
        "Index:",
        j,
        "Value:",
        language2
    );
});



let mark = [85, 92, 78, 95, 88];
let fruit = ["Mango", "Apple", "Orange", "Banana"];

console.log("Original Scores:");
console.log(mark);

console.log("Original Fruits:");
console.log(fruit);


// some()
let topper = mark.some(function(score) {
    return score > 90;
});

console.log("Using some():");
console.log("Any score above 90?", topper);


// every()
let pass = mark.every(function(scoreValue) {
    return scoreValue >= 35;
});

console.log("Using every():");
console.log("All students passed?", pass);


// join()
let fruit2 = fruit.join(" - ");

console.log("Using join():");
console.log(fruit2);


// sort()
fruit.sort();

console.log("Using sort():");
console.log(fruit);



let num = [
    [10, 20],
    [30, 40],
    [20, 50],
    [10, 60]
];

console.log("Original Multidimensional Array:");
console.log(num);

// Array Flattening
let flatten = num.flat();

console.log("\nAfter Flattening:");
console.log(flatten);

// Removing Duplicates
let unique = [...new Set(flatten)];

console.log("\nAfter Removing Duplicates:");
console.log(unique);


let price = [100, 200, 300, 400, 500];

console.log("Original Prices:");
console.log(price);


// map()
let tax = price.map(function(priceValue) {
    return priceValue + (priceValue * 10 / 100);
});

console.log("Using map():");
console.log(tax);


// filter()
let expense = price.filter(function(priceValue) {
    return priceValue > 300;
});

console.log("Using filter():");
console.log(expense);


// reduce()
let totalAmount = price.reduce(function(totalValue, currentPrice) {
    return totalValue + currentPrice;
}, 0);

console.log("Using reduce():");
console.log("Total Amount =", totalAmount);





















































































