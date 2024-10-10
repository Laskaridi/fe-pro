let thisValue = this;
console.log(thisValue);
// console.log(document);

// let idEl = document.getElementById('test');
// console.log(idEl);

// let [...classEl] = document.getElementsByClassName('title');
// console.log(classEl);

// let tagName = document.getElementsByTagName('p');
// console.log(tagName);

let queryId = document.querySelector('#test');
console.log(queryId);

let link = document.querySelector('header nav a');
console.log(link);

// let [...links] = document.querySelectorAll('header nav a');
// console.log(links);

// links.forEach(item=>{
//     item.innerHTML = 'Test';
// })

//2

let links = document.querySelectorAll('header nav a');
let linkArr = Array.from(links);
console.log(linkArr);