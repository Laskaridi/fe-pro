//Number5

let formEl = document.querySelector('form');
let inputEl = document.querySelector('#submit');
let enterEl = document.querySelector('#enter');
let listEl = document.querySelector('#list');

enterEl.onclick = function(){
    let newEl = document.createElement('li');
    newEl.setAttribute('class', 'list-group-item');
    newEl.innerHTML = inputEl.value;
    let removeEl = document.createElement('i');
    removeEl.classList.add('fa-solid', 'fa-trash', 'remove');
    listEl.appendChild(newEl);
    listEl.appendChild(removeEl);
    removeEl.addEventListener('click',function(){
        newEl.remove();
        this.remove();
    });
}


  