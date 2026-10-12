//Global Scope

 let greet = "Jose";
    function showName() {
        console.log(greet);
    }
    showName();
        console.log(greet);

//Function Scope
    function fun() {
        let age = 20;
        console.log(age);
    }
    fun();
    // console.log(age); // Error


// Block Scope
    if (true) {
        let city = "Dindigul";
        console.log(city);
    }

// console.log(city); // Error