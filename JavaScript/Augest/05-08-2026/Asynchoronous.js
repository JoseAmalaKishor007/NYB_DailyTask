console.log('Jose');
// setTimeout(function(){
    console.log('Amala');
// },5000);
// setTimeout(function(){
    console.log('Kishor');
// },3000)


function add(a, b) {
    return a + b;
}

console.log("Before");

let result = add(10, 20);

console.log(result);

console.log("After");


// function fun(){
//     console.log('Fetchingh Data');
// }
// let intervalId=setInterval(fun,2000);
//      setTimeout=(() => clearInterval(intervalId),10000);



// callback Hell
function loadDashBoard(id,callback)
{
let error;
    setTimeout(() => {
        if(error){
            return callback(error)
        }
        console.log('Fetching Data');

        setTimeout(() => {
            if(error){
                return callback(error)
            }
            console.log('Fetch FriendList')

            setTimeout(() =>{
            error='Error'
                if(error){
                    return callback(error)
                }
                console.log('Fetch Post')

                setTimeout(() => {
                    if(error){
                        return callback(error)
                    }
                    console.log('Fetch Comment')
                },2000);

            },2000);

        },2000);

    },2000);
}

function errorHandler(error){
    console.log('Error is occured...')
}

loadDashBoard('242',errorHandler);

//Promises

let prm=new Promise((resolve,reject) => {
    console.log('Executer Function')
    resolve('successfull')
    reject('Unsuccessfull')
});

prm
.then((result)=>{
    console.log(result);
})
.catch((result) => {
    console.log(result)
})

//Promise Chaining

let chain=new Promise(
    function executeFun(resolve,reject){
        console.log('Water Starts Boiling')

        setTimeout(()=> {
            console.log('Water has boiled');
            reject();
        },3000)
    }
);

chain
.then(()=>{
    console.log('Successfully Boiled')
})

.catch(()=>{
    console.log('Not Boiled')
})









