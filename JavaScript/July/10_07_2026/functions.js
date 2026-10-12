"use strict"
function hlo(){
    console.log("Hii Hello");
}
hlo();

// Clouser

function outer(){
    let count=0;
   return function inner(){
        count++;
        console.log(count);
    }
}
let res1=outer();
res1();

// Example for Closur

function createBankAccount(initialAmount){
    let balance=initialAmount;

    return{ 

        deposit:(amount)=>{
        balance=balance+amount;
        console.log("Deposit Amount :",amount ,"Total Balance :",balance);
        },
        withdraw:(amount)=>{
            if(amount > balance){
                console.warn("Insufficient Balance")
            }
            else{
                balance=balance-amount;
        console.log("Withdrawn Amount :",amount ,"Total Balance :",balance);
            }
        },
        checkBalance:()=>console.log("Current Balance :",balance),
    };
}


let joseAccount=createBankAccount(200);
console.log(joseAccount);
console.log(joseAccount.deposit(1000))
console.log(joseAccount.deposit(200))
console.log(joseAccount.deposit(300))
console.log(joseAccount.withdraw(1000))
console.log(joseAccount.deposit(200))
console.log(joseAccount.checkBalance());


// "This" Keyword

console.log(this);

function jose(){
    console.log(this);
}
jose()

const person = {
  name: "Jose",
  greet: function() {
    console.log(this.name);
  }
};

person.greet(); // Jose


const person1 = {
  name: "kishor",
  greet: function() {
    console.log(this.name);
  }
};

person.greet(); // Jose

const person2 = {
  name: "Jose",
  greet: function() {
    const inner = () => {
      console.log(this.name);
    };
    inner();
  }
};

person.greet(); // Jose
 
