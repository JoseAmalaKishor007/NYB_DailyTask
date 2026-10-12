let heading=document.getElementById("head");
// heading.innerHTML="Im a Programmer";
console.log(heading.innerHTML);

let paragraph=document.getElementById('para');
paragraph.style.color="Red"
paragraph.style.fontSize='30px';

let add=document.createElement('h2');
add.innerHTML='This is added paragraph';
document.body.appendChild(add);
console.log(add.innerHTML);

document.getElementById('para').remove();


let getId=document.getElementById('head');
console.log(getId.innerHTML)

let getClass=document.getElementsByClassName('p1');
console.log(getClass[0].innerHTML);

let tag=document.getElementsByTagName('h1');
console.log(tag)

let selectorCls=document.querySelector('.cls');
console.log(selectorCls.innerHTML)

let selectorId=document.querySelector('#head')
console.log(selectorId.innerHTML)

let selectorAllId=document.querySelectorAll('#head');
console.log(selectorAllId[0].innerHTML);
console.log(selectorAllId[1].innerHTML);

let selectorAllCls=document.querySelectorAll('.p1');
console.log(selectorAllCls[0].innerHTML);
console.log(selectorAllCls[1].innerHTML);
console.log(selectorAllCls[2].innerHTML);


let dad=document.getElementById('fname');
console.log(dad.parentElement);

let son=document.getElementById('traverse');
console.log(son.children[0].innerHTML)
console.log(son.children[1].innerHTML)
console.log(son.children[2].innerHTML)

console.log(son.firstElementChild.innerHTML);
console.log(son.lastElementChild.innerHTML);

let sibling2=document.getElementById('sname');
console.log(sibling2.previousElementSibling.innerHTML)
console.log(sibling2.nextElementSibling.innerHTML)

let adding=document.createElement('h1');
adding.innerHTML='i love to play cricket'
document.body.appendChild(adding);

let create=document.createElement('p');
create.innerHTML='this is also new';
document.getElementById('new').append(create);

document.getElementById('newH1').remove();

let newpara=document.createElement('p');
newpara="this is new para";
let oldpara=document.getElementById('old');
let parent=document.getElementById('replace');


let button1=document.getElementById("btn1");
button1.addEventListener('click',function(){
    alert('Button Clicked!')
})

let button2=document.getElementById("btn2");
button2.addEventListener('dblclick',function(){
    alert('Button Clicked!')
})

let button4=document.getElementById("btn3");
button4.addEventListener('mouseover',function(){
    alert('Button Clicked!')
})

let button5=document.getElementById("btn5");
button5.addEventListener('mousemove',function(){
    alert('Button Clicked!')
})

let button6=document.getElementById("btn6");
button6.addEventListener('keydown',function(){
    alert('Button Clicked!')
})

let button7=document.getElementById("btn7");
button7.addEventListener('keyup',function(){
    alert('Button Clicked!')
})

let button8=document.getElementById("btn8");
button8.addEventListener('input',function(){
    alert('Button Clicked!')
})

let button9=document.getElementById("btn9");
button9.addEventListener('change',function(){
    alert('Button Clicked!')
})

let button2=document.getElementById("btn1");
button2.addEventListener('submit',function(){
    alert('Button Clicked!')
})




