let text3=document.getElementById("demo");
text3.innerHTML="Im a Programmer";  //change the sentance by id
text3.style.color="red"; //change the color by id
text3.style.fontSize="40px"      //change the fontsize by id
// console.log(text);


let head=document.getElementById('heading');
head.innerHTML='Ding Dong Bell';

// Add an Element

let para=document.createElement('h3');
para.innerHTML='I had completed my bachelor degree in Computer Science Engineering'
document.body.appendChild(para).innerHTML;
console.log(para);

// document.getElementById("heading").remove();

//Print innet Text with element

let text2=document.getElementById('demo2').innerHTML;
console.log(text2);


function readHeading() {
    let text = document.getElementById("headingText").innerHTML;
    console.log(text);
}

let students = document.getElementsByClassName("studentName");


// getElementsByClassName()
console.log(students[0].innerHTML);
console.log(students[1].innerHTML);
console.log(students[2].innerHTML);

// getElementsByTagName()
let courseList = document.getElementsByTagName("li");
console.log(courseList[2].innerHTML);

// querySelector()
let title = document.querySelector(".pageTitle");
console.log(title.innerHTML);












