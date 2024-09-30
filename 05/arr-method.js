let myArr = [];
myArr.push('Test1');
myArr.push('Test2');
myArr.push('Test3');

console.log(myArr);

myArr.pop();
myArr.pop();
myArr.pop();
myArr.pop();
console.log(myArr);

myArr.unshift('First');
myArr.unshift('Second');
myArr.unshift('Third');

//delete myArr[1]; // empty slot
console.log(myArr);

myArr.shift();
myArr.shift();

console.log(myArr);


console.log(myArr.length);
let stringValue = 'Hello';
console.log(`Hello string ${stringValue.length}`);
if(stringValue.length>0){
    // stringValue.pop();
}

// isArray

let newArray = new Array(2);

console.log(Array.isArray('String'));
console.log(Array.isArray(123));
console.log(Array.isArray({a:1}));
console.log(Array.isArray([1,2,3]));


function testFn(...ars){
    console.log(ars);
    let test = ars;
    test.pop();
    console.log(test);
}
testFn(1,2)


// Fill

let fillArr = new Array(10);
fillArr.fill('No data');
console.log(fillArr);

fillArr.fill('****', 5);
console.log(fillArr);

fillArr.fill('!!!!!', 6,8);
console.log(fillArr);

// Sort
console.log('=== Sort ===');
let sortValue = [13,2,22,1,15,5,8, 100];
sortValue.sort();
console.log(sortValue);

let animals = ['cat', 'rat', 'bat', 'cow', 'chicken'];
animals.sort();
console.log(animals);

sortValue.sort((a,b)=>a-b);
console.log(sortValue);

sortValue.sort((a,b)=>a+b);
console.log(sortValue);

let filmsArr = [
    {filmName:'Terminator', year:1994},
    {filmName:'Terminator 5', year:2017},
    {filmName:'Terminator 3', year:1999}
]

filmsArr.sort((a,b)=>a.year-b.year);
console.log(filmsArr);

// Reverse
console.log('=== reverse ===');
let originalArr = [1,2,3,4];
originalArr.reverse();
console.log(originalArr);

//Concat 
console.log('=== concat ===');

let firstArr = [1,2,3];
let secondArr = [4,5,6];
// firstArr = firstArr.concat(secondArr);
firstArr = firstArr.concat(secondArr, [7,8,9], 'Test', 'Hello', true);

console.log(firstArr);


console.log('=== Includes ===');

let includeArr = [1,2,3,4,20,'Test', false];
console.log(`20 include in arr ${includeArr.includes(20)}`);
console.log(`Test include in arr ${includeArr.includes('Test')}`);
console.log(`False include in arr ${includeArr.includes(false)}`);
console.log(`New include in arr ${includeArr.includes('New')}`);

console.log('=== IndexOf ===');

let indexArr = [1,2,3,'Test',50];
console.log(`Search index ${indexArr.indexOf(50)}`);
console.log(`Search index ${indexArr.indexOf(505)}`);
console.log(`Search index ${indexArr.indexOf(2)}`);
console.log(`Search index ${indexArr.indexOf('Test')}`);
console.log(`Search index ${indexArr.indexOf(1)}`);

console.log(indexArr);

console.log('=== Join ===');
let joinArr = ['Hello','World', 1,2,3];
console.log(joinArr);
let afterJoin = joinArr.join(' ');
let b = afterJoin.toUpperCase();
console.log(afterJoin);
// spit
afterJoin = b.split(' ');
console.log(afterJoin);