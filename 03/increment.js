let myNumber = 1;
myNumber = myNumber +1; //myNumber = 1+1;
console.log(myNumber);
myNumber = myNumber +1; //myNumber = 2+1;
console.log(myNumber);
myNumber+=1;
console.log(myNumber);

let minusValue = 10;
minusValue -=2;
console.log(minusValue);

let multiplyValue = 3;
multiplyValue*=2;
console.log(multiplyValue);

let divideValue = 8;
divideValue/=2;
console.log(divideValue);

console.log('postFixIncrement');
let postfixIncrement = 1;
console.log(`Start value ${postfixIncrement}`);
console.log(`Call with increment value ${postfixIncrement++}`);
console.log(`Call with  value ${postfixIncrement}`);
console.log(`Call with increment value ${postfixIncrement++}`);
console.log(`Call with  value ${postfixIncrement}`);

let postfixDecrement = 10;
console.log(`Start value ${postfixDecrement}`);
console.log(`Call with Decrement value ${postfixDecrement--}`);
console.log(`Call with  value ${postfixDecrement}`);
console.log(`Call with Decrement value ${postfixDecrement--}`);
console.log(`Call with  value ${postfixDecrement}`);


console.log('PrefixIncrement');
let prefixIncrement = 1;
console.log(`Start value ${prefixIncrement}`);
console.log(`Call with increment value ${++prefixIncrement}`);
console.log(`Call with  value ${prefixIncrement}`);
console.log(`Call with increment value ${++prefixIncrement}`);
console.log(`Call with  value ${prefixIncrement}`);

console.log('PrefixDecrement');
let PrefixDecrement = 1;
console.log(`Start value ${PrefixDecrement}`);
console.log(`Call with increment value ${--PrefixDecrement}`);
console.log(`Call with  value ${PrefixDecrement}`);
console.log(`Call with increment value ${--PrefixDecrement}`);
console.log(`Call with  value ${PrefixDecrement}`);