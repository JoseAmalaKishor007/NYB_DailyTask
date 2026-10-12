document.getElementById("text").style.color = "red";

let text = document.getElementById("demo").innerText;
console.log(text);

let para = document.createElement("p");

para.innerHTML = "New Paragraph";

document.body.appendChild(para);

document.getElementById("text").remove();

let text = document.getElementById("demo").textContent;


// Select an element
let heading = document.getElementById("heading");

// Change text
heading.innerHTML = "Hello World";

// Change style
heading.style.color = "blue";

// Remove element
heading.remove();










