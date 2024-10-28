
//Number1

let textStr = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos itaque vero laborum fugit harum! Quia, cumque necessitatibus nemo veniam odit dolor impedit aspernatur, ipsa vitae minima quasi doloribus repellendus cupiditate!";
let regExTextStr = /[A-Z]/g;
let matchTextStr = textStr.match(regExTextStr);
console.log(matchTextStr);


console.log('=====Number2=====');
//Number2

let operation = "5 плюс 7 = 3";
let regExOperation = /[0-9]/g;
let matchOperation = operation.match(regExOperation);
console.log(matchOperation);


console.log('=====Number3=====');
//Number3

let letterRegEx = /\w{5}/g;
let matchLetter = textStr.match(letterRegEx);
console.log(matchLetter);



//Number4

let formEl = document.querySelector('#session');
let enterBtn = document.querySelector('#enter');
let displayBtn = document.querySelector('#display');

enterBtn.onclick = function(){
    const textContainer = document.querySelector('#text-container').value;
    sessionStorage.setItem('savedText', textContainer);
    formEl.reset();
    alert("Дані збережено!");
};

displayBtn.onclick = function(){
    const savedText = sessionStorage.getItem('savedText');
    if(savedText){
        document.querySelector('.saved-text').textContent = savedText;
    }
    else{
        alert("Немає збережених даних.");
    }
}


//Number5

let enterLoginBtn = document.querySelector('#enter-login');

enterLoginBtn.onclick = function(){
    const email = document.querySelector('#email').value;
    const pass = document.querySelector('#pass').value;
    const errorMassage = document.querySelector('.error-massage');

    errorMassage.textContent = '';

    const emailRegEx = /^\w+@\w+\.[a-zA-Z]{2,4}$/;
    const emailTest = emailRegEx.test(email);

    const passRegEx = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
    const passTest = passRegEx.test(pass);

    if(!emailTest){
        errorMassage.textContent = "Невірний формат email";
        enterLoginBtn.disabled = true;
    }else if(!passTest){
        errorMassage.textContent = "Пароль має містити мінімум 8 символів і цифрові значення та літери в верхньому регістрі";
        enterLoginBtn.disabled = true;
    }else{
        errorMassage.textContent = "Email і пароль введені коректно!";
    }
}
