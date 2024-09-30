//Push
//Push1
let arrayPush = [];
arrayPush.push(1,3,4,'test1','test2');
console.log(arrayPush);


console.log('Push2===================');


//Push2
let arrayPushNew = [2,5,4,7];
let element = 1;

function pushFn(array, elValue){
        array.push(elValue);
        console.log(array);
}
pushFn(arrayPushNew, element);

console.log('Pop1===================');

//Pop
//Pop1
let arrayPop = [5,7,3,9,0];
arrayPop.pop();
console.log(arrayPop);


console.log('Pop2===================');


//Pop2
let arrayPopNew = [6,3,8,9,4];

function popFn(array){
        array.pop();
        console.log(array);
}
popFn(arrayPopNew);


console.log('Unshift1===================');


//Unshift
let unshiftArray = [5,8,2,9,5];
unshiftArray.unshift(7);
console.log(unshiftArray);


console.log('Unshift2===================');


//Unshift2
let unshiftArrayNew = [2,8,4,6];
let unshiftEl = 'test';

function unshiftFn(array, value){
        array.unshift(value);
        console.log(array);
}
unshiftFn(unshiftArrayNew, unshiftEl);


console.log('Shift1===================');


//Shift1
let arrayShift = [5,7,0,3,6];
arrayShift.shift();
console.log(arrayShift);


console.log('Shift2===================');


//Shift2
let arrayShiftNew = ['test','test2',5,9,5];

function shiftFn(array){
        array.shift();
        console.log(array);
}
shiftFn(arrayShiftNew);


console.log('Fill1===================');


//Fill1
let arrayFill = new Array(8);
arrayFill.fill('test1');
arrayFill.fill('test2', 5,7);
arrayFill.fill(33, 2,5)
console.log(arrayFill);

console.log('Fill2===================');

//Fill2
let arrayFillNew = new Array(10);
let string = 'test1', counter = 7, check = false;

function fillFn(array, value1, value2, value3){
        array.fill(value1);
        array.fill(value2, 5,7);
        array.fill(value3, 2,5);
        console.log(array);
}
fillFn(arrayFillNew, string, counter, check);

console.log('Reverse===================');

//Reverse1
let arrayRev = [1,2,3,4,5];
arrayRev.reverse();
console.log(arrayRev);


console.log('Reverse2===================');


//Reverse2
let arrayRevNew = [5,8,3,7,'test'];

function reverseFn(array){
        array.reverse();
        console.log(array);  
}
reverseFn(arrayRevNew);


console.log('Objects1===================');




//Objects1
let counterObj = 5;
let newArr = [];
let newObj = new Object();
function objectFn(n){
     for (let i = 1; i<=n; i++){
         newObj.number = i;
         newObj.square = i**2;
         newArr.push(newObj);
    } 
     return newArr;
}
console.log(objectFn(counterObj));



console.log('Objects2===================');


//Objects2
let names = ['Оля', 'Іван', 'Марія'];
let ages = [25, 30, 22];

let arrayObj = [];
function objectFnNew(array1, array2){
        for(let i = 0; i<array1.length; i++){
                arrayObj.push({name: array1[i], age: array2[i]});
        }
        return arrayObj;
}
console.log(objectFnNew(names, ages));




//Дано масив чисел видаліть найбільший елемент з масиву


let arrayNum = [5,21,9,1,3,17,78,45,23];
arrayNum.sort((a,b)=>a-b);
arrayNum.pop();
console.log(arrayNum);


console.log('===================');


let arrayNumNew = [9,3,6,77,8,34,5,6,0,23];
function numFanction(array){
    array.sort((a,b)=>b-a);
    array.fill(10, 0,3)
    console.log(array);
}
numFanction(arrayNumNew);


console.log('Додаткові===================');


//Додаткові завдання
//№1
let numbers = [7,65,1,2,43,29,5,7,1,29];

function numberFn(array){
 
}
console.log(numberFn(numbers));



console.log('===================');


//№2

let arrayNumber1 = [4,9,32,67,4];
let arrayNumber2 = [67,3,5,9,54];

function sortFn(array1, array2){
    array1 = array1.concat(array2);
    array1.sort((a,b)=>a-b);
    array1.splice(6);
    console.log(array1);
}
sortFn(arrayNumber1, arrayNumber2);


console.log('===================');



let users = [
    { name: 'Оля', age: 17 },
    { name: 'Іван', age: 25 },
    { name: 'Петро', age: 19 },
    { name: 'Марія', age: 30 },
   ];

   function filter(array){
    array.sort((a,b)=>a.age-b.age);
    let usersNew = [];
    for(let i = 0; i < array.length; i++){   
      if(array[i].age < 18){
        delete array[i];
      }   
    }
   return array;
   }
   console.log(filter(users));