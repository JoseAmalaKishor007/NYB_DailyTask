// Different Variable Types
        var studentName = "Jose";
        let age = 20;
        const country = "India";

        // Primitive Data Types
        let name = "Jose";                  // String
        let marks = 85;                     // Number
        let isStudent = true;               // Boolean
        let salary = 50000n;                // BigInt
        let uniqueId = Symbol("ID");        // Symbol
        let address;                        // Undefined
        let result = null;                  // Null

        console.log("Variable Types");
        console.log("var :", studentName);
        console.log("let :", age);
        console.log("const :", country);

        console.log("Primitive Data Types");
        console.log("String :", name);
        console.log("Number :", marks);
        console.log("Boolean :", isStudent);
        console.log("BigInt :", salary);
        console.log("Symbol :", uniqueId);
        console.log("Undefined :", address);
        console.log("Null :", result);

        console.log("Datatype Checking");
        console.log("Typeof name =", typeof name);
        console.log("Typeof marks =", typeof marks);
        console.log("Typeof isStudent =", typeof isStudent);
        console.log("Typeof salary =", typeof salary);
        console.log("Typeof uniqueId =", typeof uniqueId);
        console.log("Typeof address =", typeof address);
        console.log("Typeof result =", typeof result);

        console.log("Storage Pattern Example");
        console.log("Name stored as:", name);
        console.log("Marks stored as:", marks);
        console.log("Student Status:", isStudent);
