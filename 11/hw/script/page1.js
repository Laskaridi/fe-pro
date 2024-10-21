
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

let textBlockEl = document.querySelector('.text-block');

textBlockEl.addEventListener('contextmenu', function(e){
    e.preventDefault();
    this.innerText = `
    Вирівняти по центру 
    Вирівняти по правому краю 
    Вирівняти по лівому краю 
    Приховати елемент
    `;
    this.style.fontSize = '20px';

});

// Завдання 'keyup': Створіть ігрове поле, де користувач може переміщати 
// об'єкт (наприклад, квадрат або коло) за допомогою клавіш стрілок. 
// Рух об'єкта повинен зупинятися, коли клавіша відпущена

//Number3

let circleEl = document.querySelector('.circle');

document.addEventListener('keydown', function(e) {
  if (e.key == ArrowUp) {
    let goUp = circleEl.offsetTop;
    console.log(goUp);
    circleEl.style.top = goUp - 40 + "px";
  }
  if (e.key == ArrowDown) {
    let goDown = circleEl.offsetTop
    circleEl.style.top = goDown + 40 + "px"
  }
  if (e.key == ArrowLeft) {
    let goLeft = circleEl.offsetLeft
    circleEl.style.left = goLeft - 40 + "px"
  }
  if (e.key == ArrowRight) {
    let goRight = circleEl.offsetLeft
    circleEl.style.left = goRight + 40 + "px"
  }
})

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

