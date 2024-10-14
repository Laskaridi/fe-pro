let linkEl = document.querySelector('a');

console.log(`Link href ${linkEl.getAttribute('href')}`);
console.log(`Link targer ${linkEl.getAttribute('target')}`);

let emptyAEl = document.querySelector('.empty');
emptyAEl.setAttribute('href','https://prog.kiev.ua/sale/');
emptyAEl.setAttribute('target','_blank');
emptyAEl.innerHTML = 'Sale';

emptyAEl.setAttribute('href','https://prog.kiev.ua/');

let buttonEl = document.querySelector('button');
buttonEl.setAttribute('disabled', 'disabled');
console.log(`Is button disabled ${buttonEl.hasAttribute('disabled')}`);

console.log(`Is link has target ${emptyAEl.hasAttribute('target')}`);

console.log(`is claass ${emptyAEl.hasAttribute('class')}`);

if(linkEl.hasAttribute('class')){
    linkEl.removeAttribute('class');
    
}
linkEl.setAttribute('class', 'regular-link');

let mainTitle = document.querySelector('h1');
mainTitle.setAttribute('style','background-color:rgba(0,0,0,0.5);padding:50px;');
// mainTitle.setAttribute('style','padding:150px;');
console.log(mainTitle.style.cssText);
mainTitle.style.cssText +='font-size:40px';

mainTitle.style.color ='blue';
mainTitle.style.marginBottom=0;
mainTitle.style.fontSize = '20px';

let allTitleStyles = getComputedStyle(mainTitle);
// console.log(allTitleStyles);
console.log(allTitleStyles.fontSize);

let orgiginFontsize = parseInt(allTitleStyles.fontSize);
orgiginFontsize+=30;
console.log(orgiginFontsize);
mainTitle.style.fontSize = `${orgiginFontsize}px`;
console.log(allTitleStyles.backgroundColor);


let subTitle= document.querySelector('h2');
// subTitle.setAttribute('class', 'test');
// subTitle.setAttribute('class', 'test active');
// console.log(subTitle.className);
// subTitle.className +=' my-class'
// subTitle.setAttribute('id','top');

// console.log(subTitle.classList);

// subTitle.classList.add('first');
// subTitle.classList.add('second');
subTitle.classList.add('first', 'second', 'test-again', 'remove-me', 'double-value');

// subTitle.classList.remove('remove-me');
subTitle.classList.remove('remove-me', 'first', 'second');

subTitle.classList.replace('test-again', 'danger');
subTitle.classList.add('me');
console.log(`Test me class value ${subTitle.classList.contains('me')}`);
// subTitle.classList.remove('me');

let buttonTest = document.querySelector('.test');
let list = document.querySelector('ul');

buttonTest.onclick=function(){
    buttonTest.classList.toggle('open');
    list.classList.toggle('active');
}