// Filter
console.log('=== Filter ===');
let filterValue = [10,20,30,15,25];
function checkValue(value){
    return value>15;
}

let filetResult = filterValue.filter(checkValue);
console.log(filterValue);
console.log(filetResult);

let numbersForFilter = [1,2,3,4,56,7,8,9,10];
// let arrFn = (a)=>a*2;
let evenNumbers = numbersForFilter.filter((number)=> number %2 === 0);
console.log(evenNumbers);

let users = [
    { name: 'Оля', age: 17 },
    { name: 'Іван', age: 25 },
    { name: 'Петро', age: 19 },
    { name: 'Марія', age: 30 },
];

let filterUsers = users.filter((user)=>user.age>=18);
console.log(filterUsers);

let cars = [
    { brand: 'Toyota', model: 'Corolla', year: 2018 },
    { brand: 'Honda', model: 'Civic', year: 2020 },
    { brand: 'Ford', model: 'Focus', year: 2017 },
    { brand: 'Toyota', model: 'Camry', year: 2021 },
];

let sortCars = cars.filter(
    (car)=> car.brand === 'Toyota' && car.year >2020
);

console.log(sortCars);


console.log('==== Slice ====');

let fruits = ['яблуко', 'банан', 'вишня', 'апельсин', 'груша'];
// let myFruits = fruits.slice(); // Копія поточно массиву
// let myFruits = fruits.slice(1,4); //  Робим копію з 1 індексу по 4
// let myFruits = fruits.slice(2); //  Робим копію з 2 індексу
let myFruits = fruits.slice(-2); //  Робим копію 2 елемента з кінця масиву

console.log(`Old arr ${fruits}`);
console.log(`New arr ${myFruits}`);


console.log('==== Splice ====');

let beforeSpliceFruits = ['яблуко', 'банан', 'вишня', 'апельсин', 'груша'];
console.log(beforeSpliceFruits);
// let afterSpliceFruits = beforeSpliceFruits.splice(1,2);// Вирізає 2 елемента з 1 індексу поточного массиву
// let afterSpliceFruits = beforeSpliceFruits.splice(3); // Вирізає з 3 ідекса
let afterSpliceFruits = beforeSpliceFruits.splice(-4);




console.log(afterSpliceFruits);
console.log(`after splice ${beforeSpliceFruits}`);

// ForEach 
let forEachArr = ['First', 'Second', 'Third'];
console.log(forEachArr);
forEachArr.forEach((value, index, array)=>{
    console.log(`ForEach array item value ${value} value index  ${index} from: ${array}`);
});

let cars2 = [
    { brand: 'Toyota', model: 'Corolla', year: 2018 },
    { brand: 'Honda', model: 'Civic', year: 2020 },
    { brand: 'Ford', model: 'Focus', year: 2017 },
    { brand: 'Toyota', model: 'Camry', year: 2021 },
];

cars2.forEach((value)=>{
    console.log(`Car info ${value.brand} model: ${value.model}`);
});

// Map
console.log('==== Map ====');
let mapArr = ['a', 'b', 'c'];
let newArr = mapArr.map((value, index, array)=>{
    return `Map value ${value}, index ${index} from ${array}`
});

console.log(mapArr);
console.log(newArr);

let startNumbers = [1,2,3];
let squareValueArr = startNumbers.map((a)=>{
    return a**2;
});

console.log(startNumbers);
console.log(squareValueArr);