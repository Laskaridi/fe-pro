let firstPromise = new Promise(function(resolve, reject){
    console.log('Promise work');
});

// let x = 20;
// let y = 0;

// let calcPromise = new Promise(function(resolve, reject){
//     if(y === 0){
//         reject(alert('0 is bad value for divide operation'));
//     }
//     else{
//         let result = x/y;
//         resolve(alert(`Resolve ${result}`));
//     }
// });


let myNumber = 1;
let checkNumber = new Promise(function(resolve, reject){
    if(myNumber>2){
        resolve('Nice number');
    }
    else{
        reject('Bad value');
        // throw new Error(`Test`);
    }
});

checkNumber.then(function(value){
    console.log(value);
}).catch(function(error){
    console.log(`Promise caught error ${error}`);
});

let firstP = new Promise(function(resolve){
    resolve('First promise value');
});

let secondP = firstP.then(function(value){
    return `${value} + secondP`;
});

let thirdP = secondP.then(function(value){
    return `${value} + ThirdP`;
});

let finalP = thirdP.then(function(value){
    return `${value} + Final`;
});

finalP.then(function(finalValue){
    console.log(finalValue);
});

new Promise(resolve=>resolve('First value'))
.then(value=>`${value} + secondP short`)
.then(value=>`${value} + ThirdP short`)
.then(value=>{
    console.log(value);
});

let myFinalPromise = new Promise((resolve, reject)=>{
    let valueStatus = true;
    if(valueStatus){
        resolve('Resolve result');
    }
    else{
        reject('Reject result');
    }
});

myFinalPromise.then((result)=>{
    console.log(`My final result promise ${result} !!!!!`);
}).catch((error)=>{
    console.log(error);
}).finally(()=>{
    console.log('Final work result');
});