let mouseEl = document.querySelector('.mouse');

// mouseEl.addEventListener('mouseover', function(e){
//     this.innerText = e.type;
//     this.style.backgroundColor = 'yellow';
// });

// mouseEl.addEventListener('mouseout', function(e){
//     this.innerText = e.type;
//     this.style.backgroundColor = 'transparent';
// });

mouseEl.addEventListener('contextmenu', function(e){
    e.preventDefault();
    this.innerText = e.type;
    this.style.backgroundColor = 'gray';
});

let moveEl = document.querySelector('.move');
let infoPel = document.querySelector('.info');
moveEl.addEventListener('mousemove', function(e){
    console.log(e);
    // offsetX
    infoPel.innerHTML = `Type ${e.type} Client X an Y ${e.clientX}
      ${e.clientY} <br> Layer X an Y ${e.layerX} and  ${e.layerY}<br> Screen X an Y ${e.screenX} and ${e.screenY} <br> Offset X an Y ${e.offsetX} and ${e.offsetY}`;
});


let inputEl = document.querySelector('input');
// inputEl.addEventListener('keydown', function(e){
//     infoPel.innerText = e.type;
// });
inputEl.addEventListener('keyup', function(e){
    // infoPel.innerText = e.type;
    infoPel.innerHTML =`
        key = ${e.key} <br>
        key Code = ${e.code} <br>
        Shift key = ${e.shiftKey} <br>
        Alt key = ${e.altKey} <br>
        Ctrl key = ${e.ctrlKey} <br>
    `;
});

inputEl.addEventListener('copy', function(e){
    alert('Не копіюй!');
    e.preventDefault();
});
// inputEl.addEventListener('selectionchange', function(e){
//     alert('Selected');
// });

inputEl.addEventListener('paste', function(e){
    alert('Не додавай готові результати!');
    e.preventDefault();
});

window.addEventListener('scroll', function(){
    let srollPosition =  window.scrollY;
    console.log(`Сторінк проскролено на ${srollPosition}`);
})


// keypress - застарілий
// inputEl.addEventListener('keypress', function(e){
//     infoPel.innerText = e.type;
// });

// inputEl.onkeypress = function(){

// }
const contexMenu=document.querySelector('.contexMenu');
const textBlock=document.querySelector('.textBlock');

textBlock.addEventListener('contextmenu',function(e){
    e.preventDefault();
    contexMenu.style.display='block';
    contexMenu.style.left=`${e.pageX}px`;
    contexMenu.style.top=`${e.pageY}px`;

    document.addEventListener('click',function(e){
        contexMenu.style.display='none';
});
document.getElementById('alignCenter').addEventListener('click',function(){
    textBlock.style.textAlign='center';
});

document.getElementById('alignRigth').addEventListener('click',function(){
    textBlock.style.textAlign='right';
});

document.getElementById('alignLeft').addEventListener('click',function(){
    textBlock.style.textAlign='left';
});

document.getElementById('hideElement').addEventListener('click',function(){
    textBlock.style.display='none';
});
});





