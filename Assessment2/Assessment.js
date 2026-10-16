// que7

const products = [
  { id: 1, name: "Laptop", price: 60000 },
  { id: 2, name: "Phone", price: 30000 },
  { id: 3, name: "Chair", price: 5000 },
  { id: 4, name: "Table", price: 8000 },
];

//price above 10000
let above10000 = products.filter(function (product) {
  return product.price > 10000;
});
console.log(above10000);

//only products
let name = products.map(function (product) {
  return product.name;
});
console.log(name);

//sum of all price
let sumPrice = products.reduce(function (total, product) {
  return total + product.price;
}, 0);
console.log(sumPrice);

//arrange in decending order
let decendingOrder = products.sort(function (a, b) {
  return b.price - a.price;
});
console.log(decendingOrder);


// que 1

let heading = document.getElementById("heading");
let student = document.getElementById("student");
let btn = document.getElementById("btn");
let list = document.getElementById("list");



btn.addEventListener("click", function() {
    let name = student.value;

    if(name === ""){
        alert("Enter the name");
    return;
}

let li=document.createElement("li");
li.textContent=name+ " ";

let deleteBtn=document.createElement("button");
deleteBtn.textContent="Delete";

deleteBtn.addEventListener("click",function(){
    li.remove();
    update();
})

li.appendChild(deleteBtn);
list.appendChild(li);

student.value="";
update();
});


function update() {
  heading.textContent = "Total Students: " + list.children.length;
}



// que3


console.log("First Execution");

console.log("Second Execution");


setTimeout(function(){
    console.log("This is Third Execution but executes after 2 Seconds bcz it has SetTimeout");
},2000);

console.log("Fourth Execution")


let promise =new promise(function(resolve){
    setTimeout(function() {
        resolve("Promise completed");
    }, 1000);
})














