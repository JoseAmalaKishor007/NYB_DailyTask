// Operators

//i)Arithmetic 
// ii)Assignment
// iii)Comparision
// iv)Logical
// v)Bitwise
// vi)Unary
// vii)Conditional
// viii)Terinary Operator

//i)Arithmetic 

let a=20;
let b=10;
console.log(a+b); //add
console.log(a-b); //sub
console.log(a*b); //mul
console.log(a/b); //div

// ii)Assignment ==> =/+=/-=/*=//=

console.log(b+=a); //b=b+a
console.log(b-=a); //b=b-a
console.log(b*=a); //b=b*a
console.log(b/=a); //b=b/a

// iii)Comparision ==> ==/===/!=/!==/>/</>=/<=
let c=50;
let d=40;

console.log(c==d);
console.log(c===d);
console.log(c!=d);
console.log(c!==d);
console.log(c>d);
console.log(c<d);
console.log(c<=d);
console.log(c>=d);

// iv)Logical &&/||/!

console.log(c>d && d>c);
console.log(c>d || d>c);
console.log(!(c<d));

// vii)Conditional if/ if..else/ else if/switch

// If Statement

let e=50;
if(e>40){
    console.log("Greater");
}

// if..else

let result1=82;
if(result1>90){
    console.log("Grade 'A'")
}
else{
    // console.log("Grade 'B'")
}

// else if

let result=30;
if(result>90){
    console.log("Grade 'A'")
}
else if(result>80){
    console.log("Grade 'B'")
}
else if(result>60){
    console.log("Grade 'C'")
}
else if(result>50){
    console.log("Grade 'D'")
}
else if(result>=35){
    console.log("Grade 'E'")
}
else {
    console.log("Fail")
}

// switch
let course='AI';

switch(course){
    case "Mech":
        console.log("No im not Mech")
        break;

    case "EEE":
        console.log("Im not EEE");
        break;

    case "ECE":
          console.log("Im not ECE");
        break;

    case "CSE":
        console.log("Im CSE");
        break;

    default:
    console.log("There is no my Group")
}


// Terinary Operatior

let cgpa=80;
let grade= cgpa>70?"First Class":"Second Class";
console.log(grade);