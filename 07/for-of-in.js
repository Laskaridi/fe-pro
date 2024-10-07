let indexValueStorage = [1,2,3,'Test', true, 'Hello', 7];
console.log(indexValueStorage);

// for(let i=0; i<indexValueStorage.length; i++){
//     console.log(`index: ${i} index value ${indexValueStorage[i]}`);
// }
for (const value of indexValueStorage) {
    console.log(`index value ${value}`);
}

let hardArray = [
    {username:'Tom'},
    {username:'Bob'},
    {username:'Ann'}
]

for(let item of hardArray){
    console.log(`Username: ${item.username}`);
}

let myStringValue = 'Hello World !';
for(let char of myStringValue){
    console.log(`Char valeu ${char}`);
}

function myCalc(){
    for(let argumentItem of arguments){
        console.log(`Item value: ${argumentItem}`);
    }
}
myCalc('First', true, 'test', 4, 5, 6);

// for in

let objValue = {
    a:1,
    b:22,
    c:33,
    info:function(){
        console.log('Hello');
    }
}

// console.log(objValue);
console.log(`===== For in =====`);
for (const keyName in objValue) {
    console.log(`Keyname ${keyName} key value: ${objValue[keyName]}`);
    // console.log(objValue.hasOwnProperty(keyName)) перевірка ключа;
}