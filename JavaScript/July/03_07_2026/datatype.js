// // // two types of datatype
// // // 1.Primitive datatype
// // // 2.nonPrimitive datatype

// // // primitive Datatype

// // //1.String
// // //2.integer
// // //3.Boolean
// // //4.Undifined 
// // //5.null
// // //6.Bigint
// // //7.Symbols

// // let string="jose"
// // let kishor=string
// // let age=22
// // let male=true
// // let death
// // let happines=null
// // let big=351656516856516546565269865165465n
// // let id = Symbol("id");
// // let id2 = Symbol("id");

  



// // // console.log(kishor)
// // // console.log(string)
// // // console.log(typeof age)
// // // console.log(male)
// // // console.log(death)
// // // console.log(happines)
// // // console.log(big , typeof big)
// // // console.log(id === id2); 
// // // console.log(typeof id);


// // // Nonprimitive Datatype
// // // object
// // // Array
// // // Function
// // // Date
// // // Map
// // // Set

// // //Object
// let man={
//     fname:'jose',
//     secname:'amala',
//     laname:"kishor",
//     age:22,
//     city:'dgl',
//     work:'remote',
//     phn:32146565465,
//     attenance:{jan:20,feb:26,mar:30}
// }

// console.log(man)
// // console.log(typeof man)

//Array
// let num=[1,2,3,4,5]
// console.log(num)
// console.log(typeof num)

// // // // Function

// // function salary(name,days){
// //      var  perday=2000
// //     console.log("Salary Of ",name," is :",perday * days);
// //     console.log("Execution Complet")
// //     return perday*days;
// // }
// // salary("jose",29)
// // console.log(salary("kishor",28))

// // console.log("All the salaries are calculated")


// // //Date

// let now = new Date();
// console.log(now);

// // // Map

// let map = new Map();
// map.set("name", "John");
// map.set("age", 25);
// map.set("place","TamilNadu");

// console.log(map.get("name")); 
// console.log(map.get("place"));

// // // Set

// let set = new Set();

// set.add(10);
// set.add(20);
// set.add(30);
// set.add(10);
// set.add(20);

// console.log(set); // {10, 20}

function salary(name,days){
    let perday=2000
    console.log("the salary of ",name,"is",perday*days);

    console.log("The execution is complete");
    
    return perday*days
}
salary("jose",28)
salary("kishor",30)
console.log(salary("kishor",26))


console.log("all salaries are calculated");



// let today = new Date();

// console.log("Current Date and Time:", today);
// console.log("Year:", today.getFullYear());
// console.log("Month:", today.getMonth() + 1); // month starts from 0
// console.log("Date:", today.getDate());
// console.log("Day:", today.getDay()); // 0 = Sunday



// let numbers = new Set();

// numbers.add(10);
// numbers.add(20);
// numbers.add(30);
// numbers.add(20); // duplicate, won't be added

// console.log(numbers);        // Set(3) {10, 20, 30}
// console.log(numbers.has(20)); // true
// console.log(numbers.size);    // 3


// Create a Map
// let student = new Map();

// // Add values
// student.set("name", "John");
// student.set("age", 21);
// student.set("course", "BCA");

// // Display values
// console.log("Name:", student.get("name"));
// console.log("Age:", student.get("age"));
// console.log("Course:", student.get("course"));

// // Check if key exists
// console.log("Has age?", student.has("age"));

// // Delete a key
// student.delete("course");

// // Display all items
// console.log("Map after deletion:");
// for (let [key, value] of student) {
//     console.log(key , " : " ,value);
// }



