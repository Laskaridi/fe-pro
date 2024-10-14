let activeEl = document.querySelector('.active');
// console.log(activeEl.nextSibling);
console.log(activeEl.nextElementSibling);
console.log(activeEl.previousElementSibling);

let nextEl = activeEl.nextElementSibling;
let previosEl = activeEl.previousElementSibling;

nextEl.innerHTML = 'Next';
previosEl.innerHTML ='Prev';

console.log(activeEl.parentElement);