let grandparent=document.getElementById('grandparent')
let parent=document.getElementById('parent')
let child=document.getElementById('child')
let sib1=document.getElementById('sib1')
let sib2=document.getElementById('sib2')

//Event Bubbling

grandparent.addEventListener('click',function(){
    console.log('GrandParent')
})

parent.addEventListener('click',function(){
    console.log('Parent')
})


child.addEventListener('click',function(){
    console.log('child')
})

sib1.addEventListener('click',function(){
    console.log('sib1')
})
// event.stopPropagation(); 

sib2.addEventListener('click',function(){
    console.log('sib2')
})


//Event Capturing

let pricipal=document.getElementById('pricipal');
let APrincipal=document.getElementById('APrincipal');
let Teacher=document.getElementById('Teacher');
let clsLeader=document.getElementById('clsLeader');
let students=document.getElementById('students');


pricipal.addEventListener('click',function(){
    console.log('Principal')
},true)
APrincipal.addEventListener('click',function(){
    console.log('APrincipal')
},true)
Teacher.addEventListener('click',function(){
    console.log('Teacher')
},true)
clsLeader.addEventListener('click',function(){
    console.log('Class Leader')
},true)
students.addEventListener('click',function(){
    console.log('Students')
},true)
