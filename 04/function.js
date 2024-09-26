
let a = 2;
let b = 3;
let operationValue = '+';
switch(operationValue){
    case '+':
        console.log(`${a+b}`);
        break;
    case '-':
        console.log(`${a-b}`);
        break;
    case '*':
        console.log(`${a*b}`);
        break;
    case '/':
        if(b<0){
            console.log(`Error ${b} must be greate than 0`);
        }
        else{
            console.log(`${a/b}`);
        }
        break;
    default:
        console.log('No info');
        break;         
}

// function declaration
myFunction();

function myFunction(){
    console.log('===============');
    console.log('Hello function');
    console.log('===============');
}


function myFunctionArgs(firstArg, secondArg){
    console.log('===============');
    console.log(`Hello first ${firstArg} and second ${secondArg}`);
    console.log('===============');
}
// myFunctionArgs(parametr, parametr)
myFunctionArgs(11, 12);

function summValue(firstValue, secondValue){
    console.log(`${firstValue}+${secondValue}= ${firstValue+secondValue}`);
}
summValue(2,2);
summValue(6,2);


let global = 'Global variable';

function scopeObject(){
    let localVar = 'local variable'
    console.log(`Info about ${global} + local info: ${localVar}`);
    for(let i =0 ; i<5; i++){
        let test = 'test value'
        console.log(`Local var ${localVar} + ${i}`);
    }
    // console.log(test);
}
// console.log(`Outside call ${localVar}`);
scopeObject();

// function newSumm (a, b){
//     if(a !== undefined && b!== undefined){
//        let summ = a+b; 
//        return summ;
//     }
//     else{
//         return 'Error in paramas'
//     }
    
// }
function newSumm (a = 0, b = 0){
    let summ = a+b; 
    return summ;
}

console.log(`Retunr sumv value ${newSumm(2,3)}`);

console.log(`Retunr sumv value ${newSumm(2)}`);

console.log(`Retunr sumv value ${newSumm()}`);

function manyArgs(a, b){
    console.log(`${a}, ${b}`);
    console.log(arguments);
}

manyArgs(4, 5);

manyArgs(1, 2, 6, 7, 8, 9);


function allArgs ( ...args){
    console.log(args);
}

allArgs('fsdf', 'fsdafsd', 122);

function upTen(value){
    let newValue = value*10;
    return newValue;
}

function loopFnTest(loopLimit, callBackFunction){
    for (let i =0; i<loopLimit; i++) {
        let upValue = callBackFunction(i);
        console.log(`Up value result ${upValue}`);
    }
}

loopFnTest(3, upTen);

// Function expresion

let functionExpession = function(a, b){
    return a*b;
}

console.log(`Call func expression example ${functionExpession(4,5)}`);

function nomrmalVersion(a, b){
    return a*b;
}

// arrowFn 
// let arrowFn = (a, b)=>a*b;
let arrowFn = (a, b)=>{ let summ = a*b; return summ; };

console.log(`Test function ${nomrmalVersion(6,7)}`);
console.log(`Test function ${arrowFn(6,7)}`);


function checkItemValue(value){
    if(value>100){
        return value;
    }
    else{
        return 'Small value';
    }
} 

function sortData(data, checkItemCallback){
    let result  = checkItemCallback(data);
    if(result !== 'Small value'){
        console.log(`Data valid ${result}`);
    }
    else{
        console.log(`Data invalid`);
    }
}

sortData(101, checkItemValue);
sortData(90, checkItemValue);