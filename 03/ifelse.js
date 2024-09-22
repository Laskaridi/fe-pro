let checkValue = 2>3;

if(checkValue && 10>3){
    console.log(true);
}
else{
    console.log(false);
}

let userNumber = 13;

if(userNumber<4){
    console.log(`user number less than 4`);
}
else if(userNumber>5 && userNumber<10){
    console.log('5> and <10');
}
else if(userNumber>10 && userNumber<15){
    console.log('10< and <15');
}
else{
    console.log('another number no information');
}

let  adminLogin = false;

// if(adminLogin){
   
// }
// else{
//     console.log('Hello user');
// }
if(!adminLogin){
    console.log('Hello user');
}

let firstValue =2;
let secondValue = 20;
if(firstValue != 0){
    let result = secondValue/firstValue;
    if(result>2){
        let newResult = result/100;
        console.log(newResult);
    }
    else{
        console.log('Cancel second operation');
    }
}   
else{
    console.log('Cancel operation');
}

let result = '';
let userLogin = true;

// if(userLogin){
//     result = 'Hello user';
// }
// else{
//     result ='Login to system';
// }
result = userLogin ? 'Hello user short if' :'Login to system short else';

console.log(`Result value ${result}`);

let firstTestValue = 100;
let secondTestValue = 20;

// let maxValue;

// if(firstTestValue>secondTestValue){
//     maxValue = firstTestValue;
// }
// else{
//     maxValue = secondTestValue
// }
let maxValue=firstTestValue>secondTestValue?firstTestValue:secondTestValue;

console.log(maxValue);

let score = 85;
let grade;

if(score>=90){
    grade ='A';
}
else if(score>=80){
    grade='B';
}
else if(score>=70){
    grade='C';
}
else{
    grade='D';
}

// let grade = (score>=90) ? 'A':
//             (score>=80) ? 'B':
//             (score>=70) ? 'C': 'D';

console.log(grade);