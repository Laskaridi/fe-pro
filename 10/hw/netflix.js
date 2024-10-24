
let contentEl = document.querySelector('.genres');
let genresArr = ['Drama', '|', 'Thriller', '|', 'Supernatural'];
genresArr.reverse();

for(let element of genresArr){
    let genre = document.createElement('h2');
    genre.innerHTML=element;
    contentEl.prepend(genre);
    
}
let genresStyle = document.querySelector('.genres');
genresStyle.setAttribute('style', 'display:flex;');

urlArr = ['images/video1.png', 'images/video2.png', 'images/video3.png', 'images/video4.png', 'images/video5.png']

let images = document.querySelector('.images');

urlArr.forEach((item) => {
    let imageEl = document.createElement('img');
    imageEl.setAttribute('src', item);
    images.appendChild(imageEl);
});
    
    
   
//Date

let topContent = document.querySelector('.top-left');
let date = document.createElement('h3');
date.innerHTML= '12 October 2024';
topContent.appendChild(date);






//Rating Stars

const stars = document.querySelectorAll('.star');
let currentRating = 0;  


stars.forEach(star => {
    star.addEventListener('click', function() {
        currentRating = this.getAttribute('data-value');
        updateStars(currentRating);
    });

});

function updateStars(rating) {
    stars.forEach(star => {
        if (star.getAttribute('data-value') <= rating) {
            star.classList.add('selected');
        } else {
            star.classList.remove('selected');
        }
    });
}