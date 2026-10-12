// Question 1
    function check(name, age, email) {
        if (!name) {
            return "Enter the name";
        }

        if (age < 18) {
            return "Age is between 18 to 60";
        }

        if (age > 60) {
            return "Age is between 18 to 60";
        }

        if (email === "") {
            return "Enter the email";
        }

        if (!email.includes("@")) {
            return "Email contain @";
        }

        if (!email.includes(".")) {
            return "Email contain .";
        }

        return "Candidate details are correct";
    }

    
    function msg(name, age,email) {
        return `Hello I'm ${name}, I'm ${age} years old, and this is my email id ${email}.`;
    }

   
    let res = check("Jose", 23, "jose@gmail.com");
    let message = msg("jose", 23,"jose@gmail.com");

    console.log(res);
    console.log(message);


// Question 2

function calc(operation,...num){
    if(operation == "add"){
        return num[0]+num[1]+num[2];
    }


    if(operation == "sub"){
        return num[0]-num[1]-num[2];
    }

    if(operation == "mul"){
        return num[0]*num[1]*num[2];
    }

    if(operation == "div"){
        return num[0]/num[1]/num[2];
    }
    
}


function calculation(callback,operation,...num){

    return callback(operation,...num)

}

console.log("Addition :",calculation(calc,"add",10,20,30));
console.log("Subtraction :",calculation(calc,"sub",10,20,30));
console.log("Multiplication :",calculation(calc,"mul",10,20,30));
console.log("Division :",calculation(calc,"div",10,20,30));



// Question 3


const employees = [
  { id: 1, name: "Ravi", department: "IT", salary: 45000 },
  { id: 2, name: "Priya", department: "HR", salary: 55000 },
  { id: 3, name: "Arjun", department: "IT", salary: 65000 },
  { id: 4, name: "Sneha", department: "Finance", salary: 50000 },
  { id: 5, name: "Kiran", department: "IT", salary: 75000 }
];


// 1)1.	Get all IT employees

let itEmp = employees.filter(emp => emp.department === "IT");
console.log("Get all IT employees")
console.log(itEmp);


// 2.Get employees earning more than 50000. 

let highSal=employees.filter(emp => emp.salary > 50000);
console.log("Get employees earning more than 50000.")
console.log(highSal)


// 3.Calculate the total salary. 

let calcSal=employees.reduce((total,emp) => total + emp.salary,0);
console.log("Calculate the total salary.")
console.log(calcSal);


// 4.Find the highest-paid employee. 

let highPaid=employees.reduce((a,b) =>{
    
    if (a.salary > b.salary) {
        return a;
    }
    return b;
});

console.log("Find the highest-paid employee. ")
console.log(highPaid);


// 5.Return an array containing only employee names. 

let empName=employees.map(emp => emp.name);
console.log("Return an array containing only employee names.")
console.log(empName);


// 6.Sort employees by salary in descending order. 

let salDecend=employees.sort((a,b)=> b.salary - a.salary)
console.log("Sort employees by salary in descending order.")
console.log(salDecend);



// Question 4

const users = [
  { id: 1, name: "Ravi", email: "ravi@test.com" },
  { id: 2, name: "Priya", email: "priya@test.com" },
  { id: 1, name: "Ravi", email: "ravi@test.com" },
  { id: 3, name: "Arjun", email: "arjun@test.com" }
];
// Function to remove duplicate users
function removeDuplicates(users) {

    let uniqueUsers = [];

    for (let user of users) {

        let exists = uniqueUsers.find(u => u.id === user.id);

        if (!exists) {
            uniqueUsers.push(user);
        }

    }

    return uniqueUsers;
}














