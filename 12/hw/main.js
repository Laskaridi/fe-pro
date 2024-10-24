//Number1
const [...colorBody] = document.querySelectorAll('input[name="color"]');
let body = document.querySelector('body');

colorBody.forEach(color=>{
    color.addEventListener('change', function(){
       body.style.backgroundColor = this.value;
    });
});



//Number2

let listCountry = document.querySelector('#country');
let infoText = document.querySelector('.info-country');

listCountry.addEventListener('change', function(){
    let countryInfo ={
        'mx':'Capital and largest city is Mexico City',
        'fr':'Capital and largest city is Paris',
        'de':'Capital and largest city is Berlin',
        'ag':'Capital and largest city is Buenos Aires'
    };
    let selectedCountry = this.value;

    if(selectedCountry){
        infoText.textContent = countryInfo[selectedCountry];
    }
    else{
        infoText.textContent = 'Choose the country';
    }
});


//Number3

let buttonCounter = document.querySelector('#start-button');
let counter = document.querySelector('.counter');
let count = 0;

function startCounter(){
    let intervalCounter = setInterval(function(){
        count++;
        counter.textContent = `${count} seconds`;
        if(count>=10){
            clearInterval(intervalCounter);
         }
    },1000);
}
buttonCounter.addEventListener('click', startCounter);


//Number4

let startButton = document.querySelector('#start');
let resetButton = document.querySelector('#reset');
let timerStart = document.querySelector('#timer');
let timeRemaining = 25 * 60;
let timer = 0;
let isRunning = false;

function timeFn(item){
    let minutes = Math.floor(item/60);
    let seconds = item%60;
    if(seconds<10){
        seconds = '0' + seconds;
    }
    return minutes + ":" + seconds;
}

function startCountOut(){
    if(!isRunning){
        isRunning = true;
        let intervalCountOut = setInterval(function(){
        timeRemaining--;
        timerStart.textContent = timeFn(timeRemaining);
        if(timeRemaining<=0){
            clearInterval(intervalCountOut);
            isRunning = false;
        }
    },1000);
  }
}

function resetCount(){
    if(isRunning){
        clearInterval(intervalCountOut);
        isRunning = false;
    }
}


startButton.addEventListener('click', startCountOut);
resetButton.addEventListener('click', resetCount);