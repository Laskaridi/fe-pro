console.log('=====Number1=====');

//Number1
//Використовуючи for in  виведіть значення з обєктку в console.log

const person = {
    name: 'John',
    age: 25,
    occupation: 'Developer'
};

for(const keyName in person){
    console.log(`Value of object: ${person[keyName]}`);
}


console.log('=====Number2=====');


//Використовуючи for of  та for in  виведіть занчення з обєктів які знаходяться в масиві

const students = [
    { name: 'Alice', age: 20, grade: 'A' },
    { name: 'Bob', age: 22, grade: 'B' },
    { name: 'Charlie', age: 21, grade: 'C' }
];

for(const key of students){
    console.log(`Name: ${key.name}, age: ${key.age}, grade: ${key.grade}`);
}


console.log('=====Number3=====');


// Написати гру "Камінь, ножниці, папір"  дані користувач отримує через prompt а результат гри виводити використовуючи alert (тут треба Math.random та if) 

let valueUser = prompt('Введіть слово: камінь, ножниці або папір');
let valueGame = Math.random();
if (valueGame <= 0.33){
    valueGame = 'камінь';
}else if (valueGame <= 0.64){
    valueGame = 'ножниці';
}else {
    valueGame = 'папір';
}
function gameFunction(item1, item2){
        if(item1 === item2){
            alert("Нічия");
        }
        else if(
          (item1 === "камінь" && item2 === "ножниці") ||
          (item1 === "ножниці" && item2 === "папір") ||
          (item1 === "папір" && item2 === "камінь")
        ){
          alert("Ви виграли");
        } 
        else if(
            (item2 === "камінь" && item1 === "ножниці") ||
            (item2 === "ножниці" && item1 === "папір") ||
            (item2 === "папір" && item1 === "камінь")
          ){
            alert("Ви програли");
        }else {
            alert("Ви ввели неправильне слово");
        }
 }

gameFunction(valueUser, valueGame);


console.log('=====Math.min=====');


//Створіть функцію, яка приймає два числа як аргументи і повертає менше з них.

function mathMinFn(){
    for(const argValue of arguments){
        console.log(argValue);
    }
}
mathMinFn(Math.min(9,7));


console.log('=====Math.max=====');


//Створіть функцію, яка приймає два числа як аргументи і повертає більше з них.


function mathMaxFn(){
    for(const argValue of arguments){
        console.log(argValue);
    }
}
mathMaxFn(Math.max(3,11));


console.log('=====Math.pow=====');

//Створіть функцію, яка підносить число до заданого ступеня.

let numberPow = 4;

function powFn(value){
    console.log(value);
}
powFn(Math.pow(numberPow, 3));


console.log('=====Math.floor=====');

//Створіть функцію, яка приймає випадкове дробове число та використовує Math.floor для округлення вниз.

function floorFn(value){
    console.log(value);
}
floorFn(Math.floor(Math.random()*25));


console.log('=====Math.ceil=====');


//Створіть функцію, яка приймає випадкове дробове число та використовує Math.ceil для округлення вгору.

function ceilFn(value){
    console.log(value);
}
ceilFn(Math.ceil(Math.random()*32));


console.log('=====Class=====');


//Створіть клас Person з властивостями name та age.
//Створіть об'єкт з цього класу з ім'ям "John" та віком 30.


class Person{
    constructor(name, age){
    this._name = name;
    this._age = age;
    }
    sayHello(){
        console.log(`Hello ${this._name}`)
    }
}

let personFirst = new Person('John', 30);
console.log(personFirst);

personFirst.sayHello();


class Student extends Person{
    constructor(name, age, studentId){
        super(name, age);
        this._studentId;
    }
    study(){
        console.log(`${this._name}, ви вивчили матеріал`);
    }
}


let studentFirst = new Student('Tom', 23, 245);
studentFirst.study();


console.log('=====Додаткові=====');
console.log('=====Book=====');
// Додаткова задача 
// Створіть клас Book, який представляє книгу з наступними властивостями:
// Властивості:
// title (назва книги)
// author (автор)
// year (рік публікації)
// genres (масив жанрів)
// ratings (масив чисел, що представляють оцінки читачів)
// Геттери та сеттери:
// Геттер averageRating — обчислює та повертає середню оцінку книги.
// Сеттер для year — дозволяє встановити рік публікації з перевіркою, що рік не в майбутньому.
// Сеттер для genres — дозволяє додавати нові жанри, але не допускає дублювання жанрів.
// Методи:
// addRating(rating) — додає оцінку до масиву ratings, перевіряючи, що оцінка є числом від 1 до 5.
// getInfo() — повертає рядок з інформацією про книгу у форматі: "Назва: ..., Автор: ..., Рік: ..., Жанри: ..."..

class Book{
    constructor(title, author, year, genres, ratings){
        this._title = title;
        this._author = author;
        this._year = year;
        this._genres = genres;
        this._ratings = [];
    }
    get averageRating(){
        let sum = 0;
        for (let i = 0; i < this._ratings.length; i++) {
          sum += this._ratings[i];
        }
        return sum / this._ratings.length;
      }
    set year(year){
        if(this._year <= 2024){
            this._year = true;
        }
        else{
            this._year = false;
        }
    }
    set genres(addGenre){
        this._genres += addGenre;
        if(addGenre === this._genres){
            addGenre = false;
        }
    }
    addRating(rating){
        if(rating >=1 && rating <= 5){
            this._ratings.push(rating);
         }
         else{ 
            console.log('Введіть число від 1 до 5');
         }    
    }
    getInfo(){
        console.log(`Назва: ${this._title}, Автор: ${this._author}, Рік: ${this._year}, Жанри: ${this._genres}, Рейтинг: ${this._ratings}`);
    }
}

let book1 = new Book('One house left', 'Vincent Ralph', 1993, 'History', []);
let book2 = new Book('The plot against native America', 'Bill Vaughn', 2024, 'History', []);


book1.year = this._year;
console.log(book1);

book1.genres = ', Thriller';
console.log(book1);

book1.addRating(6.3);
book1.addRating(4.2);
book1.addRating(3.8);
console.log(`Середній рейтинг: ${book1.averageRating}`);

book1.getInfo();


console.log('=====User=====');


class User{
    constructor(username, password, role, status){
        this._username = username;
        this._password = password;
        this._role = role;
        this._status = status;
    }
    login(password){
        if(password === this._password){
            console.log('Ви ввійшли');
        }
        else{
            console.log('Не правильний пароль');
        }
        return password;
    }
    logout(isActive){
        if(this._status != isActive){
            console.log('Ви вийшли');
        }
        return isActive;
    }
    getInfo(){
        console.log(`Користувач: ${this._username}, Роль: ${this._role}, Статус: ${this._status}`);
    }
}

let user1 = new User('James', 'pass1', 'admin', 'isActive');
user1.login('pass1');
user1.logout('');
user1.getInfo();


console.log('=====UserManager=====');


