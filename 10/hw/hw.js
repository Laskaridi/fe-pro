//Number1
let buttonEl = document.querySelector('.mybtn');
buttonEl.style.marginLeft = '150px';

let pElement = document.querySelector('p');
pElement.style.width = '300px';
pElement.style.marginLeft = '50px';

function getRandomColor(){
    const r = Math.floor(Math.random()*256);
    const g = Math.floor(Math.random()*256);
    const b = Math.floor(Math.random()*256);
    return `rgb(${r}, ${g}, ${b})`;
}

buttonEl.onclick = function(){
    pElement.style.color = getRandomColor();
}


//Number2

let dblElement = document.querySelector('.dbl-element');
dblElement.style.width = '80px';
dblElement.style.height = '50px';
dblElement.style.backgroundColor = 'green';
dblElement.style.margin = '100px';

dblElement.ondblclick = function(){
    dblElement.style.width = '160px';
    dblElement.style.height = '100px';
}


//Number3

let btnCounter = document.querySelector('.mybtn-count');
btnCounter.style.marginLeft = '150px';
let counter = document.querySelector('h2');
counter.style.margin = '20px 175px';
counter.innerText = 0;
let count = 0;

function counterFn(){
    count++;
    counter.innerText = count;
    if(count>9){
        btnCounter.removeEventListener('click', counterFn);
    }
}

btnCounter.addEventListener('click',  counterFn);
   

//Number4
let listBtn = document.querySelector('.mybtn-list');
listBtn.style.margin = '50px 140px';
let [...list] = document.querySelectorAll('div');

list.forEach(item=>{
    item.onclick = function (){
        this.remove();
    }
})


//Number5
let blockContainer = document.querySelector('.blockContainer');
blockContainer.style.margin = '50px 75px'
let [...buttons] = document.querySelectorAll('button.blockContainer');
blockContainer.onclick = function(e){
    if(e.target.classList.contains('first')){
        alert('Перша кнопка отримала клік');
    }
    else if(e.target.classList.contains('second')){
        alert('Друга кнопка отримала клік');
    }
    else{
        alert('Третя кнопка отримала клік');
        }
}



//Number6
let buttonMenu = document.querySelector('.open');
let listMenu = document.querySelector('ul');

buttonMenu.onclick = function(){
    buttonMenu.classList.toggle('open');
    listMenu.classList.toggle('active');
}