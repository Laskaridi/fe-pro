//Number5

// Динамічний список задач
// Мета: Створити додаток для управління списком задач, де користувач може 
// додавати та видаляти задачі.

// Інструкції:
// Створіть поле введення для введення назви задачі.
// Додайте кнопку для додавання задачі до списку.
// Кожна додана задача повинна з'являтися на сторінці у вигляді списку.
// Додайте можливість видалення задачі зі списку.

let formEl = document.querySelector('form');
let inputEl = document.querySelector('#submit');
let enterEl = document.querySelector('#enter');
let addEl = document.querySelector('#add');
let removeEl = document.querySelector('.remove');
let listEl = document.querySelector('#list');

enterEl.onclick = function(e){
    e.preventDefault();
    document.querySelector('li').innerHTML = `Завдання №1: ${inputEl.value}`;
    formEl.reset();

}

removeEl.onclick = function(){
    document.querySelector('li').innerHTML = `№1`;
}
addEl.onclick = function(){
    let newEl = document.createElement('li');
    newEl.setAttribute('class', 'list-group-item');
    let newRemoveEl = document.createElement('i');
    newRemoveEl.classList.add('fa-solid', 'fa-trash', 'remove');
    listEl.appendChild(newEl);
    listEl.appendChild(newRemoveEl);
}



  