//Number1

let stringPromise = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure corrupti eveniet eos expedita doloribus recusandae animi. Eligendi, recusandae tempora, illum ad sunt odio, quis nostrum nihil corporis quo sequi! Recusandae.';

let firstPromise = new Promise(function(resolve){
    setTimeout(() =>{
        resolve(stringPromise.toUpperCase());
    }, 2000);
}).then((value) =>{
    alert(value);
}).catch((error) =>{
    console.log(`Promise caught error ${error}`);
});
    


//Number2

function numbersPromise(firstNumber, secondNumber){
    return new Promise((resolve, reject) =>{
        if(typeof firstNumber === 'number' && typeof secondNumber === 'number'){
            if(firstNumber > secondNumber){
                resolve(`Число ${firstNumber} більше за ${secondNumber}`);
            }
            else if(secondNumber > firstNumber){
                resolve(`Число ${secondNumber} більше за ${firstNumber}`);
            }
            else{
                reject('Числа рівні');
            }
         } 
         else{
            reject('Аргументи мають бути числами');
         }
    });
}

numbersPromise(10, 8)
.then(value => console.log('Більше число: ', value))
.catch(error => console.log('Помилка: ', error));



//Number3

// Використовуйте fetch для отримання списку всіх користувачів з JSONPlaceholder 
// (/users ендпойнт).
// https://jsonplaceholder.typicode.com/users
// Виведіть імена та електронні адреси користувачів  на веб-сторінку.

fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
    .then(users => {
        const userList = document.querySelector('#user-list');

        users.forEach(user => {
           const listItem = document.createElement('li');
           listItem.classList.add('list-group-item', 'border')
           listItem.style.width = '500px';
           listItem.style.minHeight = '40px';
            listItem.textContent = `Користувач: ${user.name}, email: ${user.email}`;
            userList.appendChild(listItem);
        });
    })


   //Number4

document.querySelector('#planets').addEventListener('click', () => {
    fetch('https://swapi.dev/api/planets/')
    .then(response => response.json())
    .then(data => {
        const planetsList = document.querySelector('#planets-list');

        data.results.forEach(planet => {
            const card = document.createElement('li');
            card.classList.add('list-group-item', 'border')
            card.style.width = '300px';
            card.style.minHeight = '40px';
            card.style.paddingLeft = '10px';
            card.style.marginLeft = '100px';
            card.dataset.id = planet.url.match(/(\d+)\/$/)[1];
            card.textContent = `Планета ${planet.name}`;
            card.addEventListener('click', () => planetsDetails(card.dataset.id));
            planetsList.appendChild(card);
        });
    })
    .catch((error) => {
        console.log('Помилка отримання даних: ', error);
    });
});

function planetsDetails(planetId){
    fetch(`https://swapi.dev/api/planets/${planetId}/`)
    .then(response => response.json())
    .then(planet => {
        const planetItem = document.querySelector('#planet-details');
        planetItem.innerHTML = `
                 Назва: ${planet.name}<br>
                 Клімат: ${planet.climate}<br>
                 Населення: ${planet.population}<br> 
                 Діаметр: ${planet.diameter} км<br> 
                 Період обертання: ${planet.rotation_period} годин<br> 
                 Період орбіти: ${planet.orbital_period} днів`
    })
    .catch((error) => {
        console.log('Помилка отримання додаткових даних: ', error);
    });
}
