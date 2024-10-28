
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



//Slider

const slides = document.querySelector('.slides');
const slide = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.icon1');
const nextBtn = document.querySelector('.icon2');

let currentIndex = 0;
const totalSlides = slide.length;

function showSlide(index) {
    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

prevBtn.addEventListener('click', function() {
    showSlide(currentIndex - 1);
});

nextBtn.addEventListener('click', function() {
    showSlide(currentIndex + 1);
});
    
   
//Date

let topContent = document.querySelector('.top-left');
let date = document.createElement('h3');
const today = new Date();
const options = {year:'numeric', month:'long', day:'numeric'};
const formatDate = today.toLocaleDateString('en-UA', options);
date.textContent = formatDate;
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