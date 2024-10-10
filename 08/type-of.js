// typeof
// Boolean,
// undefined,
// number,
// string,
// Symbol,
// function,
// Object


console.log(`Test data type ${typeof 42}`);
console.log(`Test data type ${typeof '42'}`);
console.log(`Test data type ${typeof "42"}`);

let objValue = {value:'Test'};

console.log(`Test data type ${typeof objValue}`);
console.log(`Test data type ${typeof null}`);
console.log(`Test data type ${typeof [1,2]}`);

const key = Symbol('Value');
console.log(`Test data type ${typeof key}`);

const fnValue = ()=>'hello';
console.log(`Test data type ${typeof fnValue}`);

console.log(`Test data type ${typeof undefined}`);
console.log(`Test data type ${typeof true}`);