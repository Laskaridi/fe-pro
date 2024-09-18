let textValue ='Total price:'; // string
let price1 = 10;
let price2 = 20;

let totalPrice = price1+price2; //number 30

let result = textValue+''+totalPrice +'= '+price1 +'+'+price2;
console.log(result);

// NEW!!! Template literal

// let newResult = `Test template literal ${price1}`;
// let newResult = `Test template literal! ${textValue} ${price1}+${price2}=${totalPrice}`;
let newResult = `Test template literal! ${textValue} ${price1}+${price2}=${price1+price2}`;

console.log(newResult);
console.log(`Version 2 Test template literal! ${textValue} ${price1}+${price2}=${price1+price2}`);


let firstValue = 2;
let secondValue = 6;

console.log(`- operation ${secondValue-firstValue}`);
console.log(`- operation ${firstValue-secondValue}`);
console.log(`+ operation ${firstValue+secondValue}`);
console.log(`/ operation ${secondValue/firstValue}`);
console.log(`* operation ${firstValue*secondValue}`);
// %
console.log(`%`);
console.log(`% operation ${20%2}`);
console.log(`% operation ${30%10}`);
console.log(`% operation ${3%2}`);
console.log(`% operation ${5%2}`);
console.log(`% operation ${5%3}`);
console.log(`% operation ${5%5}`);
// **
// console.log(`Simple version 2 in 2 ${2*2}`);
// console.log(`Simple version 2 in 3 ${2*2*2*2*2*2*2*2*2}`);
console.log('**');
console.log(`Simple version 2 in 2 ${2**2}`);
console.log(`Simple version 2 in 3 ${2**3}`);
console.log(`Simple version 2 in 3 ${2**10}`);

console.log(`Simple version 8 root 3 ${16**1/4}`);
console.log(`Simple version 4 root 2 ${4**1/2}`);

console.log(`Simple version2.0: 4 root 2 ${4**0.5}`);
let resultExample = 8 ** (1/3);
console.log(resultExample);
// console.log('Together operation');

let product1 = 10;
let product2 = 20;
let product3 = 30;

let totalProductPrice = product1+product2+product3;
let middleValue = totalProductPrice/3;
console.log(middleValue);
let middleValuePrice = (product1+product2+product3)/3;
console.log(`Test all operation ${middleValuePrice}`);
let mathExample = ((2*3)+(4*5))/4;
console.log(mathExample);