
//Number1

let colorEl = document.querySelector('.color-container');

colorEl.addEventListener('mouseover', function(e){
    this.innerText = 'First color';
    this.style.backgroundColor = 'yellow';
});

colorEl.addEventListener('mouseout', function(e){
    this.innerText = 'Second color';
    this.style.backgroundColor = 'lightblue';
});


//Number2
let contextMenu = document.querySelector('.context-menu');
let textBlockEl = document.querySelector('.text-block');

textBlockEl.addEventListener('contextmenu', function(e){
    e.preventDefault();
    contextMenu.style.top = `${e.clientY}px`;
    contextMenu.style.left = `${e.clientX}px`;
    contextMenu.style.display ='block';
});
textBlockEl.onclick = function(){
  contextMenu.style.display = 'none';
}


//Number3
let playBlock = document.querySelector('.play-block');
let circleEl = document.querySelector('.circle');
let posX = 0;
let posY = 0;
let moveStep = 4;

document.addEventListener('keydown', function(e) {
  switch(e.key){
    case 'ArrowUp':
        posY = Math.max(0, posY-moveStep);
        break;
    case 'ArrowDown':
        posY = Math.min(playBlock.clientHeight - circleEl.clientHeight, posY+moveStep);
        break;
    case 'ArrowLeft':
        posX = Math.max(0, posX-moveStep);
        break;
    case 'ArrowRight':
        posX = Math.min(playBlock.clientWidth - circleEl.clientWidth, posX+moveStep);
        break;            
}
circleEl.style.top = `${posY}px`;
circleEl.style.left = `${posX}px`;
});

//Number4

let btnresultEl = document.querySelector('#result');
let resultEl = document.querySelector('h2');
resultEl.style.color = 'black';

btnresultEl.addEventListener('click', function(e){
    let sum = document.querySelector('#input1').value;
    let rate = document.querySelector('#input2').value;
    let result = sum * rate;
    resultEl.innerText = result;
});

