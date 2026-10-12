console.log('-------If Statement-------')

let a=54;
if(a % 2==0){
    console.log('The number is Even');
}

let age=24;
if(age > 18){
    console.log('Elegible for Voting');
}


console.log('-------If-else Statement-------')

let b = 10;
let c = 25;

if (b > c) {
    console.log("B is larger");
} else {
    console.log("C is larger");
}

let eligible=74;
if(eligible >= 18){
    console.log('You are eligible to Vote')
}
else{
    console.log('You are not eligible to Vote')
    
}


console.log('-------Else-if Statement-------')

let mark=85;

if(mark>90){
    console.log('You had scored A+ grade.')
}
else if(mark>80){
    console.log('You had scored A grade.')
}
else if(mark>70){
    console.log('You had scored B+ grade.')
}
else if(mark>60){
    console.log('You had scored B grade.')
}
else if(mark>50){
    console.log('You had scored C+ grade.')
}
else if(mark>35){
    console.log('You had scored C grade')
}
else{
    console.log('You are Failed ,Better luck next time!.')

}


console.log('-------Switch Operator-------')

let day = 5;

switch (day) {
    case 1:
        console.log("Monday");
        break;
        case 2:
            console.log("Tuesday");
            break;
            case 3:
        console.log("Wednesday");
        break;
        case 4:
            console.log("Thursday");
            break;
            case 5:
        console.log("Friday");
        break;
        default:
            console.log("Invalid Day");
        }
        
        
console.log('-------Truthy and Falsy Values-------')
        
    let value = -1;

if(value){
    console.log("Truthy");
}else{
    console.log("Falsy");
}



