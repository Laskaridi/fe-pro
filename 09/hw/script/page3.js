let bodyContainer = document.querySelector('body');
let headerEl =document.createElement('header');
bodyContainer.appendChild(headerEl);

headerEl.setAttribute('style', 'padding:50px;background-color:yellow;text-align:center');


const menuData = [
        { name: 'Головна', url: '/' },
        { name: 'Про нас', url: '/about' },
        { name: 'Послуги', url: '/services' },
]

menuData.forEach((item)=>{
    let linkEl = document.createElement('a');
    linkEl.innerHTML = item.name;
    linkEl.setAttribute('href', item.url);
    linkEl.setAttribute('target', '_blank');
    headerEl.appendChild(linkEl);
})
   




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


