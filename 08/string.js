let strValue = 'String String value';
console.log(strValue);

let replaceStr = strValue.replace('String', 'New string');
console.log(replaceStr);

console.log(strValue.length);

let arrValue =['Hello', 'Array'];
console.log(arrValue);
let stringArr = arrValue.join();
console.log(stringArr);

let names = 'Nik,Tom,Bob,Rob';

let namesArr = names.split(',');
console.log(namesArr);

let catName = '    Max                              ';
// console.log(`Trim value:${catName.trimStart()}!`);
// console.log(`Trim value:${catName.trimEnd()}!`);
console.log(`Trim value:${catName.trim()}!`);


console.log(catName.trim().length);


let sliceValue = 'Js program';
let newString = sliceValue.slice(3)
console.log(sliceValue);
console.log(newString);


let userChoise = 'КаМінь'; // камінь

console.log(userChoise.toLowerCase());
console.log(userChoise.toUpperCase());

// Luke Skywalker
// LUKE Skywalker