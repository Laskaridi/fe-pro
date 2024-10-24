let simpleSt = /JS/;
let simpleYear = /\d\d\d\d/g;

let simpleStrSecond = new RegExp('hi');

let textPatern  ="Lorem ipsum dolor sit, amet consectetur adipisicing 1734 elit. Autem iure quod, suscipit esse corrupti laboriosam impedit voluptatem aspernatur explicabo! Illo 1994 fugiat eius atque sit excepturi laudantium quisquam ratione at 2005 quo.";

let searchIndex = textPatern.search(simpleYear);
console.log(`Search index ${searchIndex}`);


let newText = textPatern.replace(simpleYear, '!!!!');
console.log(newText);