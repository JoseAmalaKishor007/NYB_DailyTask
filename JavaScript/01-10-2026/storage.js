function storeData() {

            // Local Storage
            localStorage.setItem("studentName", "Jose");
            localStorage.setItem("course", "JavaScript");
            localStorage.setItem("place", "Dindigul");
            localStorage.setItem("role", "Software developer");
            localStorage.setItem("age", 22);

            // Session Storage
            sessionStorage.setItem("college", "Rvs College");
            sessionStorage.setItem("year", "Final Year");

            alert("Data Stored Successfully");
        }

        function getData() {

            let studentName = localStorage.getItem("studentName");
            let course = localStorage.getItem("course");
            let place = localStorage.getItem("place");
            let role = localStorage.getItem("role");
            let age = localStorage.getItem("age");

            let college = sessionStorage.getItem("college");
            let year = sessionStorage.getItem("year");

            console.log("Student Name:", studentName);
            console.log("Course:", course);
            console.log("Place:", place);
            console.log("Role:", role);
            console.log("Age:", age);
            console.log("College:", college);
            console.log("Year:", year);

            alert("Check Console for Stored Data");
        }

        function removeData() {

            localStorage.removeItem("course");
            sessionStorage.removeItem("year");

            alert("Selected Data Removed");
        }

        function clearData() {

            localStorage.clear();
            sessionStorage.clear();

            alert("All Storage Data Cleared");
        }

// JSON.stringify() and JSON.parse()


let data = {
    empName: "John",
    dept: "IT",
    salary: 50000
};

// Object → JSON String
let jsonStr = JSON.stringify(data);
console.log("JSON String:", jsonStr);

// JSON String → Object
let originalObj = JSON.parse(jsonStr);
console.log("Object:", originalObj);

console.log("Employee Name:", originalObj.empName);
console.log("Department:", originalObj.dept);
console.log("Employee Salary:", originalObj.salary);


// Browser Object Model  
 function showBOM() {

        // Alert
        alert("Welcome to BOM Example");

        // Prompt
        let userName = prompt("Enter your name:");

        // Confirm
        let userChoice = confirm("Do you want to continue?");

        if (userChoice) {
            alert("Hello " + userName);
        } else {
            alert("Operation Cancelled");
        }

        // Navigator Object
        console.log("Browser Name:", navigator.appName);
        console.log("Platform:", navigator.platform);

        // Location Object
        console.log("Current URL:", location.href);

        // Window Object
        console.log("Window Width:", window.innerWidth);
        console.log("Window Height:", window.innerHeight);
    }





 async function getUserData() {

            try {

                let responseObject = await fetch(
                    "https://jsonplaceholder.typicode.com/users/1"
                );

                let userData = await responseObject.json();

                console.log("Name:", userData.name);
                console.log("Email:", userData.email);
                console.log("City:", userData.address.city);

            } catch (errorMessage) {

                console.log("Error:", errorMessage);

            }

        }










