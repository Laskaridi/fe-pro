function showAlert(){
    alert('Hello user');
}

let timeOutAlert = setTimeout(showAlert, 5000);

document.querySelector('.canceltTimeout').onclick = function(){
    clearTimeout(timeOutAlert);
    alert('Cancel');
}

setTimeout(function(){
    alert('set timout 2');
}, 10000);


let titleEl = document.querySelector('h1');
let count = 0;
// setInterval(function(){}, 1000);

function countFn(){
    count++;
    titleEl.innerHTML = `Count: ${count}`;
    if(count>20){
        clearInterval(intervalCounter);
        alert('Stop count');
    }
}
let intervalCounter = setInterval(countFn, 1000);