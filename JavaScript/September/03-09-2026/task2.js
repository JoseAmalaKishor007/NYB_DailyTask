
// Parameter handling
function add(a, b) {
    console.log("A =", a);
    console.log("B =", b);
    console.log("Sum =", a + b);
}   

add(10, 20);


// Arguments Object Example
function displayData() {

    console.log("Total Arguments:", arguments.length);

    for(let i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
}

displayData(100, 200, 300, 400);    
displayData("Jose", 25, "Developer");