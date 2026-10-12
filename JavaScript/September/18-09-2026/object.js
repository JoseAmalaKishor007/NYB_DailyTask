console.log('-----Objects-----');


let mark = [45, 12, 78, 23, 56, 9];

console.log("Original Array:");
console.log(mark);

// Sorting without sort()
for (let i = 0; i < mark.length - 1; i++) {

    for (let j = 0; j < mark.length - 1 - i; j++) {

        if (mark[j] > mark[j + 1]) {

            let temp = mark[j];

            mark[j] = mark[j + 1];

            mark[j + 1] = temp;
        }
    }
}

console.log("Sorted Array (Ascending Order):");
console.log(mark);


// 1. Object Literal
let details = {
    name: "Jose",
    age: 21
};

// 2. Using new Object()
let emp = new Object();
emp.employeeName = "Amala";
emp.employeeRole = "Developer";

// 3. Constructor Function
function Product(name, price) {
    this.productName = name;
    this.productPrice = price;
}

let productDetails1 = new Product("Laptop", 50000);
let productDetails2 = new Product("Keyboard", 1000);

console.log("Student Object:");
console.log(details);

console.log("Employee Object:");
console.log(emp);

console.log("Product Object:");
console.log(productDetails1);
console.log(productDetails2);




let record = {
    empName3: "Amala",
    empSalary3: 35000,

    showEmployee() {
        console.log("Employee:", this.empName3);
        console.log("Salary:", this.empSalary3);
    }
};

console.log("Original Object:");
record.showEmployee();


// Update Property
record.empSalary3 = 45000;


// Add New Property
record.employeeDepartment = "Development";


// Add New Method
record.showDepartment = function () {
    console.log("Department:", this.employeeDepartment);
};

console.log("\nAfter Updating and Adding:");
record.showEmployee();
record.showDepartment();


// Delete Property
delete record.empSalary3;

console.log("\nAfter Deleting Salary:");
console.log(record);



// Original Nested Object


let info = {
    library: "Central Library",
    books: {
        bookTitle: "JavaScript Guide",
        bookPrice: 500
    }
};

console.log("Original Object:");
console.log(info);


 
// 1. Normal Copy 

let reference = info;

reference.library = "City Library";

console.log("\nAfter Normal Copy Modification:");
console.log("Original:", info);
console.log("Copied:", reference);

 
// 2. Shallow Copy using Spread Operator 

let spread = {
    ...info
};

spread.library = "State Library";
spread.books.bookPrice = 800;

console.log("\nAfter Shallow Copy (Spread Operator):");
console.log("Original:", info);
console.log("Spread Copy:", spread);



// 3. Shallow Copy using Object.assign()


let assign = Object.assign({}, info);

assign.library = "National Library";
assign.books.bookTitle = "Advanced JavaScript";

console.log("\nAfter Shallow Copy (Object.assign()):");
console.log("Original:", info);
console.log("Assign Copy:", assign);



// 4. Deep Copy using JSON Methods


let deep = JSON.parse(
    JSON.stringify(info)
);

deep.libraryName = "Digital Library";
deep.bookDetails.bookPrice = 1200;

console.log("\nAfter Deep Copy (JSON):");
console.log("Original:", info);
console.log("Deep Copy:", deep);



// 5. Deep Copy using structuredClone()

let structured = structuredClone(info);

structured.library = "Modern Library";
structured.books.bookTitle = "ES6 Mastery";

console.log("\nAfter Deep Copy (structuredClone):");
console.log("Original:", info);
console.log("Structured Clone:", structured);










































