let head=document.getElementById('head');
let h1=document.getElementById('h1');
let p=document.getElementById('p');
console.log(head)
console.log(h1.textContent)
console.log(p.innerText)

let jose=document.getElementById('jose')
console.log(jose.value)
console.log(jose.id)

console.log(h1.tagName)
console.log(head.children)

console.log(p.parentElement)


let byId=document.getElementById('byId');
console.log(byId.innerText)

let byClass=document.getElementsByClassName('byClass');
console.log(byClass)

let tag=document.getElementsByTagName('p')
console.log(tag)

let query=document.querySelector('.byClass');
console.log(query)

let queryAll=document.querySelectorAll('.byClass');
console.log(queryAll)
console.log(queryAll[0]);
console.log(queryAll[1]);
console.log(queryAll[2]);


let traverse=document.getElementById('traverse');
let head2=document.getElementById('h11');
let para1=document.querySelector('.p1')
let h=document.querySelector('.p1')

console.log(para1.parentElement)

console.log(traverse.children)
console.log(traverse.firstElementChild)
console.log(traverse.lastElementChild)

console.log(head2.nextElementSibling)
console.log(h5.previousElementSibling)


let createH1=document.createElement('h1');
createH1.textContent='Welcome to JavaScript';
document.body.appendChild(createH1);


let createBtn=document.createElement('button');
createBtn.textContent='click!';
document.body.prepend(createBtn);



let button = document.getElementById("btn");

button.addEventListener("click", function () {
    console.log("Button Clicked");
});


let inputBox = document.getElementById("userInput");

inputBox.addEventListener("input", function () {
    console.log(inputBox.value);
});

















