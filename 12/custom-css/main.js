let changeBtn = document.querySelector('button');
changeBtn.onclick = function(){
    let root = document.documentElement;
    let currentBodyBg = getComputedStyle(root).getPropertyValue('--body-bg');
    let currentTextBg = getComputedStyle(root).getPropertyValue('--text-bg');
    let currentTextColor = getComputedStyle(root).getPropertyValue('--text-color');
    let currentTitleBg = getComputedStyle(root).getPropertyValue('--title-bg');

    // console.log(currentBodyBg);

    if(currentBodyBg === 'gray'){
        root.style.setProperty('--body-bg', 'red');
        root.style.setProperty('--text-bg', 'white');
        root.style.setProperty('--text-color', 'black');
        root.style.setProperty('--title-bg', 'orange');
    }else{
        root.style.setProperty('--body-bg', 'gray');
        root.style.setProperty('--text-bg', 'black');
        root.style.setProperty('--text-color', 'white');
        root.style.setProperty('--title-bg', 'yellow');
    }

}