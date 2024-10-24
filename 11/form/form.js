let formEl = document.querySelector('form');
let customClearEl = document.querySelector('.customClear');
let customSendEl = document.querySelector('.customSubmit');
let passwordEl = document.querySelector('#pass');
let getPasswordEl = document.querySelector('.getData');



customClearEl.addEventListener('click', function(e){
    e.preventDefault();
    formEl.reset();
    alert('Clear done');
});

customSendEl.addEventListener('click', function(e){
    e.preventDefault();
    formEl.submit();
    alert('Submit done');
});

// console.log(formEl);
// console.log([...formEl.elements]);

getPasswordEl.onclick = function(e){
    e.preventDefault();
    console.log(passwordEl.value);
    document.querySelector('label').innerHTML=`Type password ${passwordEl.value}`;
}

// formEl.addEventListener('change', function(e){
//     console.log(passwordEl.value);
// });
formEl.onchange = function(){
    console.log(passwordEl.value);
    console.log('test');
}





const taskBtn=document.querySelector('.taskButton');
const taskList=document.querySelector('.taskList');

taskBtn.addEventListener('click',function(){
    const taskInput=document.querySelector('.taskInput').value;
    if(taskInput){
        const li=document.createElement('li');
        li.style.fontSize='30px';
        li.style.marginTop='10px'
        li.style.borderBottom='2px solid black';
        li.textContent=taskInput;

        li.addEventListener('click',function(){
            li.remove();
    })
    taskList.appendChild(li);   

    document.querySelector('.taskInput').value = '';
}
})
