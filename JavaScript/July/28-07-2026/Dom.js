let text=document.getElementById("demo");
text.innerHTML="Im a programmer";
text.style.color="orange";

let para =document.createElement("h2");
para.innerHTML="How are you friends";
document.body.appendChild(para);

// document.getElementById('demo').remove();

let text2=document.getElementById("demo").innerHTML;
console.log(text2);

console.log(document.getElementById("demo").id);

// getElementById()

let byId=document.getElementById("title");
console.log(byId)

// getElementsByClassName()

let byClass=document.getElementsByClassName('message');
console.log(byClass[0].innerHTML);
console.log(byClass[1].innerHTML);

let byClass2=document.getElementsByClassName('clg')
// console.log(byClass2[0].innerHTML);
console.log(byClass2[1].innerHTML);
console.log(byClass2[2].innerHTML);

// getElementsByTagName()

let head=document.getElementsByTagName('h1');
console.log(head.length)

let paragraph=document.getElementsByTagName('p');
console.log(paragraph.length)


// document.querySelector()

// by ID #
let byQueId=document.querySelector('#title');
console.log(byQueId.innerHTML);

// bu Class .
let byQueCls=document.querySelector(".clg");
console.log(byQueCls.innerHTML)

// document.querySelectorAll()

// by id #
let byQueAllId=document.querySelectorAll("#title");
console.log(byQueAllId[0].innerHTML);
console.log(byQueAllId[1].innerHTML);

// by class .
let byQueAllCls1=document.querySelectorAll(".message");
console.log(byQueAllCls1[0].innerHTML)
console.log(byQueAllCls1[1].innerHTML)

let byQueAllCls2=document.querySelectorAll(".clg");
console.log(byQueAllCls2[0].innerHTML)
console.log(byQueAllCls2[1].innerHTML)
console.log(byQueAllCls2[2].innerHTML)
console.log(byQueAllCls2)  //nodelist

// Types of DOM Traversing
// i)Parent Traversing
// ii)Child Traversing
// iii)Sibling Traversing

// i)Parent Traversing

let trav=document.getElementById("box2");
console.log(trav.parentElement);

// ii)Child Traversing

let continer=document.getElementById("container");
console.log(continer.children);
console.log(continer.children[0]);
console.log(continer.children[1]);

console.log(container.firstElementChild);
console.log(container.lastElementChild);


// iii)Sibling Traversing

let sibling=document.getElementById("box")
console.log(sibling.nextElementSibling);
console.log(sibling.previousElementSibling);

// Adding Events to DOM Elements

let add=document.createElement('p');
add.innerHTML='This is the added Line';
document.body.appendChild(add);

document.getElementById("add").remove();



























