console.log("----- Array -----")


console.log("\n----- Creating Array -----")
let arr=['Jose','Kishor',23,'CSE',23,'Dindigul',"Jose"];
console.log(arr);

console.log("\n----- Adding element in Array -----")
arr.push(60);      
arr.unshift("Hello");     
console.log("After Adding:", arr);


console.log("\n----- Removing element in Array -----")
arr.pop();          // Remove last
arr.shift();        // Remove first
console.log("After Removing:", arr);


console.log("\n----- Acessing element in Array -----")

console.log("First Element:", arr[0]);
console.log("Third Element:", arr[2]);
console.log("Fifth Element:", arr[4]);


console.log("Search 30:", arr.indexOf(23) !== -1);


console.log("indexOf 30:", arr.indexOf(23));
console.log("indexOf 30:", arr.indexOf("Kishor"));
console.log("lastIndexOf 20:", arr.lastIndexOf('Jose'));
console.log("includes Dindigul0:", arr.includes('Dindigul'));


console.log("\n----- Map() -----")
let doubled = arr.map(num => num * 2);
console.log("map:", doubled);

console.log("\n----- filter() -----")
let greaterThan25 = arr.filter(num => num < 25);
console.log("filter:", greaterThan25);


console.log("\n----- reduce() -----")
let sum = arr.reduce((total, num) => total + num, 0);
console.log("reduce:", sum);


console.log("\n----- forEach() -----")
arr.forEach(num => console.log("forEach:", num));

console.log("\n----- find() -----")
let found = arr.find(num => num< 25);
console.log("find:", found);


console.log("\n----- findIndex() -----")
let foundIndex = arr.findIndex(num => num < 25);
console.log("findIndex:", foundIndex);


console.log("\n----- some() -----")
console.log("some:", arr.some(num => num < 45));

console.log("\n----- every() -----")
console.log("every:", arr.every(num => num > 5));


console.log("\n----- sort() -----")
let unsorted = [5, 2, 8, 1, 3];
unsorted.sort((a, b) => a - b);
console.log("sort:", unsorted);


console.log("\n----- join() -----")
console.log("join:", arr.join("-"));


console.log("\n----- flat() -----")
let nested = [1, 2, [3, 4], [5, [6]]];
console.log("flat:", nested.flat());


console.log("\n----- Removing Duplicates() -----")
let duplicate = [1, 2, 2, 3, 3, 4];
let unique = [...new Set(duplicate)];
console.log("Unique:", unique);


console.log("\n----- >Multi-dimensional Arrays() -----")

let matrix = [
    [1, 2],
    [3, 4],
    [5, 6]
];

console.log("Multi-dimensional Array:", matrix);
console.log("Access Element:", matrix[1][0]);






























