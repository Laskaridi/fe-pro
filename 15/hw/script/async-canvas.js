//Number1

async function userData(userId) {
    let responseUser = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    let user = await responseUser.json();
    console.log(`Ім'я користувача: ${user.name}`);
    console.log(`Електронна адреса: ${user.email}`);
}



//Number2

async function filmData(filmId) {
    let responseFilm = await fetch(`https://swapi.dev/api/films/${filmId}`);
    let film = await responseFilm.json();
    console.log(`Назва фільму: ${film.title}`);
    console.log(`Дата виходу: ${film.release_date}`);
}



//Number4

function drawRectangles(){
const canvas = document.querySelector('#my-canvas');
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'red';
ctx.fillRect(150, 150, 200, 100);

ctx.fillStyle = 'green';
ctx.fillRect(100, 100, 200, 100);

ctx.fillStyle = 'blue';
ctx.fillRect(50, 50, 200, 100);
}


//Number5

const svgContainer = document.querySelector('.svg-container');

const svgNs = 'http://www.w3.org/2000/svg';

function drawSvgLine(x1, y1, x2, y2, color, thickness){
    const svg = document.createElementNS(svgNs, 'svg');
    svg.setAttribute('width', '400');
    svg.setAttribute('height', '400');
    svg.style.display = 'block';
    svg.style.border = '1px solid black';
    svg.style.margin = '100px auto';

    const line = document.createElementNS(svgNs, 'line');
    line.setAttribute('x1', x1);
    line.setAttribute('y1', y1);
    line.setAttribute('x2', x2);
    line.setAttribute('y2', y2);
    line.setAttribute('stroke', color);
    line.setAttribute('stroke-width', thickness);

    svg.appendChild(line);
    svgContainer.appendChild(svg);
}






export{userData, filmData, drawRectangles, drawSvgLine};