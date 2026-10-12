"use strict"
console.log('This Keyword')



// console.log(this);

function thisKeyword(){
    console.log(this);
}

thisKeyword()


let obj={
    a:10,
    b:function(){
        console.log('It represent the whole "obj" Object :',this);
        console.log('It represent the "b" in "obj" Object :',this.b);
        console.log('It represent the "a" in "obj" Object :',this.a);
    },
}

obj.b();


let info = {
    empName: "Jose",
    empAge: 25,

    employe() {
        console.log("Name:", this.    empName);
        console.log("Age:", this.empAge);
    }
};

info.employe();

function dep() {
    let depName = "Development";
    console.log("Department:", depName);
    console.log(this);
}

dep();


let college = {
    clgName: "RVS College",

    regularFunction: function () {
        console.log("Regular Function:", this.clgName);
    },

    arrowFunction: () => {
        console.log("Arrow Function:", this.clgName);
    }
};

college.regularFunction();
college.arrowFunction();










