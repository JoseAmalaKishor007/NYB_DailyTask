// Primitive Data Type Example
        let a = 10;
        let b = a; // copy value

        b = 20;

        console.log("Primitive Data Types");
        console.log("a =", a);
        console.log("b =", b);

        // Reference Data Type Example (Array)
        let arr1 = [10, 20, 30];
        let arr2 = arr1; // copy reference

        arr2.push(40);

        console.log("Reference Data Types");
        console.log("arr1 =", arr1);
        console.log("arr2 =", arr2);

        // Reference Data Type Example (Object)
        let student1 = {
            name: "Jose",
            age: 20
        };

        let student2 = student1; // copy reference

        student2.age = 25;

        console.log("student1 =", student1);
        console.log("student2 =", student2);