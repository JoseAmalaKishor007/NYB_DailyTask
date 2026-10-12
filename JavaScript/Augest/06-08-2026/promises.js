// let prm=new Promise((resolve,reject) => {
//     console.log('This is Executer Function')
//     setTimeout(()=>{
//         console.log('This is time out')
//     },3000)
//     resolve("successfull");
//     reject('UnSuccessfull');
// });

// prm
// .then((result)=>{
//     console.log(result);
// })
// .catch((result) => {
//     console.log(result);
// })

// setTimeout(() => console.log('This is macro task'),2000);



// let prs=new Promise(
//     function execute(resolve,reject){
//         console.log('The water starts boiling');
//         setTimeout(()=>{
//             console.log('Water has boiled');
//             resolve();
//         },3000);
//     }
// )

// prs
// .then(()=>{
//     console.log('Promise fulfilled')
// })
// .catch(()=>{
//     console.log('Promise Unfulfilled')
// })


// let clg=new Promise((resolve,reject)=>{
//     console.log('I had Completed the College')
//     let backlog=1
//         if( backlog<=0 && backlog>-1){
//             resolve('No backlog');
//         }
//         else{
//             reject('There is a backlog')
//         }   
// })

// clg
// .then((result1)=>{
//     console.log(result1);
// })
// .catch((result1)=>{
//     console.log(result1)
// })

// promise Chaining

function step1()
{
    return new Promise(
        (resolve,reject) => {
            console.log('Step1 Started')
        setTimeout(() => {
            console.log('Step1 Completed');
            resolve();
        },1000);
    }
 )
}

function step2()
{
    return new Promise(
        (resolve,reject) => {
            console.log('Step2 Started')
        setTimeout(() => {
            console.log('Step2 Completed');
            // console.log('Step2 Failed');
            resolve();
            // reject();
        },4000);
    }
 )
}

function step3()
{
    return new Promise(
        (resolve,reject) => {
            console.log('Step3 Started')
        setTimeout(() => {
            console.log('Step3 Completed');
            resolve();
        },2000);
    }
 )
}

function step4()
{
    return new Promise(
        (resolve,reject) => {
            console.log('Step4 Started')
        setTimeout(() => {
            console.log('Step4 Completed');
            resolve();
        },4000);
    }
 )
}


// step1()
// .then(step2)
// .then(step3)
// .then(step4)
// .then(() => console.log('The process is successfull'))
// .catch(() => console.log('The process is failed'))

async function run1() {
    try{
        await step1();
        await step2();
        await step3();
        await step4();
        console.log('The process is successfull');
    }
    catch{
        console.log('The process is failed')
    }
}

// run1();


//Async / Await

function exmp(){
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            console.log('Task Started');
            reject();
        },3000);
    })
}

async function run2(){
    
    try{
        await exmp();
        console.log('Task Passed');
    }
    catch(error){
        console.log('Task Failed');
    }
}

run2();


let practise=new Promise((resolve,reject)=>{
    let success=true;
    if(success){
        resolve('Successfull')
    }
    else{
        reject('Failled')
    }
});

practise
.then((result3)=>{
    console.log(result3)
})

.catch((result3)=>{
    console.log(result3)
})


