        // 1. Array
        let fruits = ["Java", "JavaScript", "Python","C++"];

        // 2. Object
        let student = {
            name: "KIshor",
            age: 22,
            course: "Computer Science"
        };

        // 3. Function
        function greet() {
            return "Welcome to JavaScript";
        }

        // 4. Date
        let today = new Date();

        //5.Set
        let numbers = new Set([10, 20, 30, 20, 10]);
        

        //6.Map

        let info = new Map();

        info.set("name", "Jose");
        info.set("age", 21);

        
        console.log("This is Array");
        console.log(fruits);
        
        console.log("This is Object");
        console.log(student);
        
        console.log("This is Function");
        console.log(greet());
        
        console.log("This is Date");
        console.log(today);
        
        console.log("This is Set");
        console.log(numbers);
        
        console.log("This is Map");
        console.log(info);
        console.log("Name:", info.get("name"));
        


        console.log("Type of fruits is:", typeof fruits);

        console.log("Type of student is:", typeof student);

        console.log("Type of greet is:", typeof greet);

        console.log("Type of today is :", typeof today);

        console.log("Type of numbers is :", typeof numbers);

        console.log("Type of info is :", typeof info);















