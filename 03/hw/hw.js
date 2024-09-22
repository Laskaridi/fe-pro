// №1
let index1 = Number(prompt('Введіть число'));
if(index1%2 === 0){
    console.log(`Число парне`);
}
else{
    console.log(`Число непарне`);
}


//№2
let userAge = Number(prompt('Введіть ваш вік'));
if(userAge >=18){
    alert('Ви можете використовувати цей ресурс');
}
else{
    alert('Ви не можете використовувати цей ресурс');
}



//№3
let priceProduct = Number(prompt('Введіть ціну товару'));
let quantityProduct = Number(prompt('Введіть кількість товару'));
console.log(priceProduct*quantityProduct);



//№4
let price2Product = Number(prompt('Введіть ціну товару'));
alert((price2Product/100)*50);


//№5
let number1 = Number(prompt('Введіть перше число'));
let number2 = Number(prompt('Введіть друге число'));
let number3 = Number(prompt('Введіть третє число'));

if(number1>number2 && number1>number3){
    let maxValue;
    console.log(maxValue = number1);
}
 else if(number2>number1 && number2>number3){ 
        console.log(maxValue = number2);
    }
  else if(number3>number1 && number3>number2){
        console.log(maxValue = number3);
}
else{
    console.log('Усі числа рівні');
}


//№6
let month = Number(prompt('Введіть номер місяця'));
switch(month){
    case 1:
    case 2:
    case 12:
        console.log('Зима');
        break;
    case 3:
    case 4:
    case 5:
        console.log('Весна');
        break;
    case 6:
    case 7:
    case 8:
        console.log('Літо');
        break;
    case 9:
    case 10:
    case 11:
        console.log('Осінь');
        break;
}



//№7
let index2 = Number(prompt('Введіть число'));
if(index2>0){
    console.log('Число додатнє');
}
else if(index2<0){
    console.log("Число від'ємне");
}
else{
    console.log("Число нуль");
}



//№8
let figure = prompt('Введіть назву геометрічної фігури');
switch(figure){
    case "коло":
        console.log('Ця фігура має 0 кутів');
        break;
    case "квадрат":
        console.log('Ця фігура має 4 кути');
        break;
    case "трикутник":
        console.log('Ця фігура має 3 кути');
        break;
}



//№9
let counter = 1;
let sum = 0;
while(counter<20){
    if(counter%2 === 0){
        sum += counter;
        counter++;
    }
    else{
        counter++;
    }
}
console.log(`Сума парних чисел: ${sum}`);


//№10
for(let index3 = 10; index3 >= 1; index3--){
    console.log(`Зворотній лічильник: ${index3}`);
}



//№11
let sizeAngle = Number(prompt('Введіть величину кута в градусах'));
let size2 = '';
size2 =  sizeAngle > 90 ? 'Цей кут тупий' : sizeAngle < 90 ? 'Цей кут гострий' : 'Цей кут прямий';
console.log(size2);



//№12
for(let counter2 = 1; counter2 <=10; counter2++){
   if(counter2%2 === 0){
    console.log(`Перше парне число: ${counter2}`);
   break;
   }
}



//№13
let planet = prompt('Введіть назву планети');
switch(planet){
    case "меркурій":
    case "венера":
    case "земля":
    case "марс":
    case "юпітер":
    case "сатурн":
    case "уран":
    case "нептун":
        console.log("Це планета сонячної системи");
        break;
        default:
            console.log("Такої планети немає в сонячній системі");
}