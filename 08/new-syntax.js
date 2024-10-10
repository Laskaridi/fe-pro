const keyValue = Symbol('key');
console.log(keyValue);

const newKeyValue = Symbol('key');
console.log(newKeyValue);

console.log(`Compare Symbol ${keyValue === newKeyValue}`);

console.log(`Compare Symbol ${keyValue == newKeyValue}`);


// Rest

function restExample(...args){
    // console.log(args);
    console.log(arguments);
}

restExample(1,2,3,true, 'test');

//Spread

let firstArr = [1,2,4];
let scondArr = [...firstArr, 5,6,7];
console.log(scondArr);

let firstObj ={
    userName:'Tom',
    userAge:100
}

let moreUserInfo = {
    ...firstObj,
    skill:'js'
}
console.log(moreUserInfo);

let numbers = [1,3,5,6,0,-10];
console.log(Math.min(1,32,0,4));
console.log(Math.min(...numbers));

const person = {
    firstName:'John',
    lastName:'Biden'
}

console.log(`Person name ${person.firstName} second name ${person.lastName}`);
const {firstName, lastName} = person;
console.log(`Person name ${firstName} second name ${lastName}`);

let dataArr = ['John', 'Array', 'Age 20', 'html','css', 'js'];
const [name, secondName, age, ...skills] = dataArr;

console.log(skills);
console.log(name);
console.log(secondName);

const hero= {
    heroName:'Batman',
    realName:'Bruce',
    suitColor:'Black'

}

const {heroName, realName, suitColor='skin color green'} = hero;
console.log(`Hero info ${heroName} ${realName} suit info ${suitColor}`);


const heroes = [
    {charachter:'Batman'},
    {charachter:'Joker'},
    {charachter:'CatLady'}
]

for(const {charachter} of heroes){
    // console.log(item.charachter);
    console.log(charachter);

}
const heroesTextTitle = heroes.map(
    function({charachter}){
        return `This batman film heroes ${charachter}`
    }
);

console.log(heroesTextTitle);