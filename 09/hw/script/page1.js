const booksArray = [
    {
        title: 'Пригоди Аліси в Країні Див',
        year: 1865,
        rating: 4.5
    },
    {
        title: '1984',
        year: 1949,
        rating: 4.8
    },
    {
        title: 'Гаррі Поттер і філософський камінь',
        year: 1997,
        rating: 4.7
    }
];

let tableMain = document.querySelector("table");
tableMain.setAttribute('style', 'border:2px solid;width:30%');
console.log(tableMain);

let titleBook = document.querySelector('th');
let firstTitle = document.createElement('h5');
let secondTitle = document.createElement('h5');
let thirdTitle = document.createElement('h5');
firstTitle.innerHTML='Пригоди Аліси в Країні Див';
secondTitle.innerHTML='1984';
thirdTitle.innerHTML='Гаррі Поттер і філософський камінь';
titleBook.appendChild(firstTitle);
titleBook.appendChild(secondTitle);
titleBook.appendChild(thirdTitle);

let yearBook = document.querySelector('th:nth-child(2)');
let firstYear = document.createElement('h5');
let secondYear = document.createElement('h5');
let thirdYear = document.createElement('h5');
firstYear.innerHTML='1865';
secondYear.innerHTML='1949';
thirdYear.innerHTML='1997';
yearBook.appendChild(firstYear);
yearBook.appendChild(secondYear);
yearBook.appendChild(thirdYear);

let ratingBook = document.querySelector('th:last-child');
let firstRating = document.createElement('h5');
let secondRating = document.createElement('h5');
let thirdRating = document.createElement('h5');
firstRating.innerHTML='4.5';
secondRating.innerHTML='4.8';
thirdRating.innerHTML='4.7';
ratingBook.appendChild(firstRating);
ratingBook.appendChild(secondRating);
ratingBook.appendChild(thirdRating);