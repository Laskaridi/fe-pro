
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
    


let rating = document.querySelector('.rating');
        
for(let i = 0; i<3;i++){
    let starEl1 = document.createElement('img');
    starEl1.setAttribute('src', 'images/star1.png');
    starEl1.setAttribute('style', 'margin-right:20px');
    rating.appendChild(starEl1);
}
for(let i = 0; i<2;i++){
    let starEl2 = document.createElement('img');
    starEl2.setAttribute('src', 'images/star2.png');
    starEl2.setAttribute('style', 'margin-right:20px');
    rating.appendChild(starEl2);
}
    
   


let topContent = document.querySelector('.top-left');
let date = document.createElement('h3');
date.innerHTML= '12 October 2024';
topContent.appendChild(date);