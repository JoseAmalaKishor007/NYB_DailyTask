//window API

// alert("Hello its Browserr API !");

//DOM API
let head=document.getElementById('head');
head.innerHTML='Hii its Browser API';

//Timer API
setTimeout(function(){
    console.log('Im a Programmer');
},3000)


// Local Storage API

localStorage.setItem("name", "Jose");
localStorage.setItem("course", "CSE");
localStorage.setItem("age", "22");
localStorage.setItem("city", "Dindigul");
localStorage.setItem("nation", "Indian");
console.log(localStorage.getItem("name"));
console.log(localStorage.getItem("city"));
console.log(localStorage.getItem("nation"));



