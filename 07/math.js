// Math

let myMath = Math;
console.log(myMath);

let powValue = Math.pow(8,2);
console.log(powValue);
console.log(`Math.sqrt = ${Math.sqrt(powValue)}`);

console.log(Math.max(0,11,12,111,120,250,400,-100,10));
console.log(Math.min(0,11,12,111,120,250,400,100,10));

console.log('Floor');
console.log(Math.floor(3.99999));
console.log('Ceil');
console.log(Math.ceil(3.9));
console.log('Round');
console.log(Math.round(3.4));

console.log('Math random 0 - 1');
console.log(Math.ceil(Math.random()*100));
console.log(Math.ceil(Math.random()*100));
console.log(Math.ceil(Math.random()*100));
console.log(Math.ceil(Math.random()*100));
console.log(Math.ceil(Math.random()*100));

NewDiv.style.backgroundColor=`#${Math.floor(Math.random()*16777215).toString(16)}`; //166777215-максимальна кількість кольорів в 24-бітній-палітрі



let blockEl = document.createElement('section');
bodyContainer.appendChild(blockEl);
blockEl.setAttribute('style', 'display:flex;flex-wrap:wrap');

function getRandomColor(){
    const r = Math.floor(Math.random()*256);
    const g = Math.floor(Math.random()*256);
    const b = Math.floor(Math.random()*256);
    return `rgb(${r}, ${g}, ${b})`;
}


for(let i = 0; i < 50; i++){
let divEl = document.createElement('div');
divEl.setAttribute('style', 'border-radius:50%;width:50px;height:50px;background-color:green');
divEl.setAttribute('class', 'circle-element');
divEl.style.backgroundColor = getRandomColor();
blockEl.appendChild(divEl);
}
