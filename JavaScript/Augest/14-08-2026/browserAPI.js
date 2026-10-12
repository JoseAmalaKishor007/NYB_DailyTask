let head = document.getElementById('head');

head.style.color='red';

let head1=document.querySelector('#head1');
head1.style.color='brown'
// console.log(head1);

let para=document.querySelector('.para');
para.style.color='brown'

let title = document.getElementById("title");

title.textContent = "Hello JavaScript";

let inner=document.getElementById('inner');
inner.innerHTML='<h1>This s Inner Html Element</h1>'



console.log(localStorage)

console.log(localStorage.length);

// To sy=tore data
localStorage.setItem('college','RVS');

let movie=[
    {
        id:1,
        movie:'Janayanagan',
    },
    {
        id:2,
        movie:'Karupu',
    }
]

localStorage.setItem('movie',JSON.stringify(movie));

// to get data

console.log('My age is :' ,localStorage.getItem('age'));



// Session Storage API

sessionStorage.setItem("username", "Jose");

let user = sessionStorage.getItem("username");

console.log(user);














