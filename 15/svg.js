let btnEl = document.querySelector('button');
let svgContainer = document.querySelector('.svgContainer');

// http://www.w3.org/2000/svg
const svgNs = 'http://www.w3.org/2000/svg';

function drawSvgRect(width, height, color){
    const svg = document.createElementNS(svgNs, 'svg');
    svg.setAttribute('width', width);
    svg.setAttribute('height', height);
    svg.style.display = 'block';
    svg.style.marginBottom = '15px';

    const rect = document.createElementNS(svgNs, 'rect');
    rect.setAttribute('width', width);
    rect.setAttribute('height', height);
    rect.setAttribute('fill', color);

    svg.appendChild(rect);
    svgContainer.appendChild(svg);
}

btnEl.onclick = function(){
    drawSvgRect(400, 200, 'red');
}