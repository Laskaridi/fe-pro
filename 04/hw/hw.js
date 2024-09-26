//№1
let arrayUsers = ['Robert', 'Stiven', 'Monica', 'Liana', 'Tom'];

function  wellcomUse(){
    console.log(arrayUsers);
}
wellcomUse(arrayUsers);

function hiUser(){
    console.log(`Вітаю ${arrayUsers[0]}`);
    console.log(`Вітаю ${arrayUsers[1]}`);
    console.log(`Вітаю ${arrayUsers[2]}`);
    console.log(`Вітаю ${arrayUsers[3]}`);
    console.log(`Вітаю ${arrayUsers[4]}`);
}
hiUser(arrayUsers);


//№2
function defaultValue (firstValue = 4, secondValue = 7, thirdValue = 3){
    let summValue = firstValue * secondValue + thirdValue;
    console.log(`Сума трех значень: ${summValue}`);
}
defaultValue();



//№3
// const multiplyValues = (a, b, c) => a * b * c;
function multiplyValues(a, b, c){
    let summMulti = a * b * c;
}



//№4
let array = [];
array[0] = 0;
array[1] = 2;
array[2] = 4;
array[3] = 6;
array[4] = 8;
console.log(array);




//№5
let days = ["Понеділок", "Середа", "Неділя"];
let plans = ["Урок 03", "Урок 04", "Вихідний"];

    for(let index1 = 0; index1 < days.length; index1++){
        for(let index2 = 0; index2 < plans.length; index2++){
            console.log(`Сьогодні ${days[index1]}, у вас такі плани: ${plans[index2]}`);
            break;
        }
    }




//№6
let checkArr = [69, 96, -66, 77, 85, -85, 14, -20, 90, -36];
function checkArrFunction(checkValue){
      for(let index = 0; index < checkArr.length; index++){
        if(checkValue[index] < 0){
           checkValue[index] = 0;
        }
      }
}
console.log(checkArr);
checkArrFunction(checkArr);



//№7
let arraySumm = [3, 6, 4, 8, 2];
function summArray(value){
    let summ = 0;
    for(let i = 0; i < arraySumm.length; i++){
        summ += value[i];
    }
    console.log(`Сума чисел: ${summ}`);
}
summArray(arraySumm);



//№8
let arrayOld = [1, 2, 3, 4];

function squareArray(squareValue){
    let arrayNew = [];
    for(let i = 0; i < arrayOld.length; i++){
        let newValue = squareValue[i]**2;
        arrayNew = arrayOld.length[i];
        console.log(newValue);
    }
}
squareArray(arrayOld);
    