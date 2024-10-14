let containerEl = document.querySelector('.container');
console.log(containerEl);
let titleEl = document.createElement('h1');
titleEl.innerHTML='Hello js element';
containerEl.appendChild(titleEl);

// titleEl.innerText
let navEl = document.querySelector('header nav');
let navigationLinks = ['Home', 'About', 'Sale'];
for(let link of navigationLinks){
    let linkEl = document.createElement('a');
    linkEl.innerHTML = link;
    // navEl.appendChild(linkEl);
    // navEl.prepend(linkEl); 
    // navEl.before(linkEl); 
    navEl.after(linkEl);   
}

let listEl = document.querySelector('ul');
let activeEl = document.querySelector('.active');
let newLi = document.createElement('li');
newLi.innerHTML = 'Brand new li element';
listEl.replaceChild(newLi, activeEl);

let lastLi = listEl.lastElementChild;
console.log(lastLi);
let firstLi = listEl.firstElementChild;
console.log(firstLi);


// let [...listItems] = document.querySelectorAll('ul li');
// console.log(listItems);
firstLi.remove();
lastLi.remove();

let mainTitle = document.querySelector('h1');
mainTitle.remove();