let grand=document.getElementById('grand');
grand.addEventListener('click',function(){
    console.log('Grand Parent Clicked !')
})

let parent=document.getElementById('parent');
parent.addEventListener('click',function(){
    console.log('Parent Clicked !')
})

let child=document.getElementById('child');
child.addEventListener('click',function(){
    console.log('Child Clicked !')
})


let grand1=document.getElementById('grand1');
grand1.addEventListener('click',function(){
    console.log('Grand Parent Clicked !')
},true)

let parent1=document.getElementById('parent1');
parent1.addEventListener('click',function(){
    console.log('Parent Clicked !')
},true)

let child1=document.getElementById('child1');
child1.addEventListener('click',function(){
    console.log('Child Clicked !')
},true)


let menuList = document.getElementById("menu");

menuList.addEventListener("click", function (event) {
    if(event.target.tagName==='LI'){
        event.target.style.color='red'
    }
    console.log(event.target.textContent);
});


let delegation =document.getElementById('delegation');
delegation.addEventListener('click' , function(event){
    if(event.target.tagName==='H3'){
        event.target.style.color='orange'
    }
    console.log(event.target.tagName,event.target.textContent)
})




































