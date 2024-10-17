let weight1 = 72, weight2 = 82, weight3 = 50, weight4 = 62;
let height1 = 1.88, height2 = 1.73, height3 = 1.58, height4 = 1.70;
let sum1 = weight1/height1**2;
let sum2 = weight2/height2**2;
let sum3 = weight3/height3**2;
let sum4 = weight4/height4**2;
console.log(sum1);
console.log(sum2);
console.log(sum3);
console.log(sum4);
console.log(sum1==sum2);
console.log(sum3==sum4);

let maxValue
if(sum1>sum2, sum1>sum3, sum1>sum4){
    console.log(maxValue = sum1);
}
else if(sum2>sum1, sum2>sum3, sum2>sum4){
    console.log(maxValue = sum2);
}
else if(sum3>sum1, sum2>sum2, sum2>sum4){
    console.log(maxValue = sum3);
}
else{
    console.log(maxValue = sum4);
}

let crazyKats1 = 44, crazyKats2 = 23, crazyKats3 = 71;
let funnyDucks1 = 65, funnyDucks2 = 54, funnyDucks3 = 49;
let crazyKats, funnyDucks;
console.log(crazyKats = (crazyKats1 + crazyKats2 + crazyKats3)/3);
console.log(funnyDucks = (funnyDucks1 + funnyDucks2 + funnyDucks3)/3);
if(crazyKats == funnyDucks*2){
    console.log(`Winner: CrazyKats`);
}
else if(funnyDucks == crazyKats*2){
    console.log('Winner: FunnyDucks');
}
else {
    console.log('Winner: Nobody');
}

let crazyKats11 = 85, crazyKats22 = 54, crazyKats33 = 41;
let funnyDucks11 = 23, funnyDucks22 = 34, funnyDucks33 = 27;
let crazyKats12, funnyDucks12;
console.log(crazyKats12 = (crazyKats11 + crazyKats22 + crazyKats33)/3);
console.log(funnyDucks12 = (funnyDucks11 + funnyDucks22 + funnyDucks33)/3);
if(crazyKats12 >= funnyDucks12*2){
    console.log(`Winner: CrazyKats`);
}
else if(funnyDucks12 >= crazyKats12*2){
    console.log('Winner: FunnyDucks');
}
else {
    console.log('Winner: Nobody');
}


let arrCard = [1,6,2,8,9,0,3,5,6,8,1,2,3,8,9,0];
arrCard.fill('#', 0, 12);
let newArrCard = arrCard.join('');
console.log(newArrCard);


let arrSquare = [1, 2, 3, 4];

function squareFn(arrSquare){
    let newArrSquare = [];
    let sum = 0;
    for(let i = 0; i < arrSquare.length; i++){
        let squareValue = arrSquare[i]**2;
        newArrSquare[newArrSquare.length] = squareValue;
        sum += squareValue;
    }
    return sum;
}
console.log(squareFn(arrSquare));

let arrName = 'Rizhko Anastasiia Mykolaivna';
function initials(str) {
    return str.split(/\s+/).map((w,i) => i ? w.substring(0,1).toUpperCase() + '.' : w).join(' ');
  }
console.log(initials(arrName));  


let pinCode = '2345';

function validatePin(pin){
    let i = pin.length;
    if(i === 4){
        return true;
    }
    else if(i === 6){
        return true;
    }
    else{
        return false;
    }
}
console.log(validatePin(pinCode));



let init = 5;
function initFn(init){
    return --init;
}
console.log(initFn(init));