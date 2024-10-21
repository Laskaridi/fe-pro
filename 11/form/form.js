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