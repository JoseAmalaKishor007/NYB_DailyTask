let head=document.getElementById("head");
head.innerHTML='im jose';

head.style.color="red"
// document.getElementById('head').remove();

let grandParent=document.getElementById('grandParent');
let Parent=document.getElementById('parent');
let Child=document.getElementById('child');


grandParent.addEventListener('click',function(){
    console.log('GrandParent')
})
Parent.addEventListener('click',function(){
    console.log('Parent')
})
Child.addEventListener('click',function(){
    console.log('Child')
})


let Principal=document.getElementById('principal');
let Teacher=document.getElementById('teacher');
let Student=document.getElementById('student');

Principal.addEventListener('click',function(){
    console.log('Principal')
},true)
Teacher.addEventListener('click',function(){
    console.log('Teacher')
},true)
Student.addEventListener('click',function(){
    console.log('Student')
},true)

let container = document.getElementById("btnBox");

container.addEventListener("click", function (event) {
    console.log(event.target.innerText);
});





























