let usersInfo = [
    ['Tom', 24],
    ['Bob', 24]
];


let myObj = new Object();

let simpleObj = {};
console.log(simpleObj);
console.log(myObj);

let priceValue = 800;
let laptopObj = {
    model:'apple',
    ram:'16gb',
    memory:512,
    colors:['silver', 'black', 'gold'],
    price:priceValue,
    produceCountry:['China', 'Taiwain', 'USA'],
    procesor:{
        year:2023,
        type: 'M2'
    },
    info:function(){
        console.log(`${this.model} ram info ${laptopObj.ram} memory ${this.memory}`);
    }
}

console.log(laptopObj.model);
console.log(laptopObj.price);
console.log(laptopObj.produceCountry[0]);
console.log(laptopObj.procesor.type);
laptopObj.info();

laptopObj.prodYear = '2023';
laptopObj.chepPrice = 800;
laptopObj.bigerPrice = 2000;

laptopObj['dynamicKey'] = 'Dynamic value';
for(let i=0; i<3; i++){
    laptopObj[`key${i}`] = `Key value ${i}`; 
}
laptopObj.sound = function(){
    console.log('Play wellcome sound');
}
console.log(laptopObj);
laptopObj.sound();

delete laptopObj.colors;
delete laptopObj.procesor;
delete laptopObj.model;

console.log(laptopObj);


laptopObj.bigerPrice = 2500;
console.log(laptopObj.bigerPrice);