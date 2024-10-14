// 3)   Створіть HTML-сторінку з контейнером, в який будуть додаватися елементи
//  за допомогою JavaScript.
//     const elementsArray = [
//     { tag: 'p', text: 'Елемент 1' },
//     { tag: 'div', text: 'Елемент 2' },
//     { tag: 'span', text: 'Елемент 3' }
// ];
// Створіть функцію, яка приймає об'єкт і створює новий елемент з використанням 
// document.createElement, встановлює текст елемента та повертає його в контейнер.
// Пройдіть циклом по масив і для кожного обєкту застосуйте створену функцію

const elementsArray = [
        { tag: 'p', text: 'Елемент 1' },
        { tag: 'div', text: 'Елемент 2' },
        { tag: 'span', text: 'Елемент 3' }
    ];
   
let container = document.querySelector('.container');
container.setAttribute('style', 'width:100%;border:3px solid blue');

function createElementsFn(item){ 
     let object = document.createElement(item.tag);
     object.innerHTML=item.text;
     return object;
}

elementsArray.forEach((item)=>{
    let element = createElementsFn(item);
    container.appendChild(element);
})


