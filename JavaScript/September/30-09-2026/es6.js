console.log('ES6 Modules')


import {number } from "./importExport.js";
console.log(number);

import { userName } from "./importExport.js";
console.log(userName)

import { greet } from "./importExport.js";
console.log(greet)


// app.js

import addNum from "./importExport.js";

console.log(addNum(10, 20));


import {
    add,
    mul
} from "./importExport.js";

console.log(add(10, 50));
console.log(mul(5, 4));

