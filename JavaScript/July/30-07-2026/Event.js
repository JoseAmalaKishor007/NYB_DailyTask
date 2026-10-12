let btn1=document.getElementById('btn1');

btn1.addEventListener('click',function(){
    alert("This is a click button");
    alert("This is a 2nd click button");
    console.log('its clicked');
})

let btn2=document.getElementById('btn2');

btn2.addEventListener('dblclick',function(){
    alert('This is double click button');
    console.log('double clicked');
})

let btn3=document.getElementById('btn3');
btn3.addEventListener('mouseover',function(){
    alert('This is a MouseOver');
})

document.getElementById('btn4').addEventListener('mouseout',function(){
    alert('Mouseout');
})

let input1=document.getElementById('name1');
input1.addEventListener('keydown',function(){
    console.log("Key pressed")
})

document.getElementById('name2').addEventListener('change',function(){
    console.log('Value Changed')
})


document.querySelector('#grandparent')
.addEventListener('click', ()=>{
    console.log("Grandparent Clicked");
},true)

document.querySelector('#parent')
.addEventListener('click', ()=>{
    console.log("Parent Clicked");
},true)

document.querySelector('#child')
.addEventListener('click', ()=>{
    console.log("Child Clicked");
document.querySelector('#parent')
.addEventListener('click', ()=>{
    console.log("Parent Clicked");
},true)

document.querySelector('#child')
},true)













































