console.log('=====Sprad=====');

const arrFirst = [5,8,3];
const arrSecond = [...arrFirst, 2,4,6];
console.log(arrSecond);


console.log('=====Rest=====');



function restFn(string, ...args){
    console.log(string, args);
}
restFn('String in function', 1,5,7,true);




function restFnNew(...args){
    let sum = 0;
        for (let i = 0; i < args.length; i++) {
          sum += args[i];
        }
        return sum / args.length;
}
console.log(restFnNew(1,4,11));



console.log('=====TypeOf1=====');


function typeOfFunction(arguments){
    console.log(typeof arguments);
}
typeOfFunction("3");



console.log('=====TypeOf2=====');



let typeOfValue = "test";

function testTypeOf(value){
    if(typeof value ===  "number"){
        console.log('Це число');
    }
    else if(typeof value === "string"){
        console.log('Це рядок');
    }
    else{
        console.log('Це інший тип');
    }
}
testTypeOf(typeOfValue);


console.log('=====Date1=====');


//Створіть функцію, яка повертає рік народження користувача коли користувач вводить свій вік
let todayDate = 2024;

function ageUserFn(date){
    let ageUser = Number(prompt('Введіть ваш вік'));
    let birthDate = date - ageUser;
    return alert(`Дата народження: ${birthDate}`);
}
ageUserFn(todayDate);



console.log('=====Date2=====');

let nowDate = new Date();
console.log(`Today is ${nowDate.toLocaleString()}`);



console.log('=====Split=====');


let stringSplit = 'test test test';
let newStringSplit = stringSplit.split(' ');
console.log(newStringSplit);
let upCase = newStringSplit.map((item)=>{
    return item.toUpperCase();
})
console.log(upCase);



console.log('=====HTML1=====');


let getElement = document.getElementById('div');
console.log(getElement);

let classElement = document.getElementsByClassName('header');
console.log(classElement);

let tagElement = document.getElementsByTagName('section');
console.log(tagElement);


console.log('=====HTML2=====');


let liElementFirst = document.querySelector('li');
console.log(liElementFirst);

let liElementLast = document.querySelector('li:last-child');
console.log(liElementLast);

let liElementThird = document.querySelector('li:nth-child(3)');
console.log(liElementThird);

let liElementAll = document.querySelectorAll('li');
console.log(liElementAll);


let newAllElements = Array.from(liElementAll);
console.log(newAllElements);



console.log('=====HTML3=====');
let listItems = document.querySelectorAll('ul.nav > li');
console.log(listItems);
let listItem = document.querySelectorAll('li:nth-child(2)');
console.log(listItem);