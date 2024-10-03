console.log('=======Number1======');

//Let Const


for (let i = 0; i < 5; i++) {
    console.log(i);
}

const message = 'test';
function example() {
    if (true) {
        const message = 'Hello, world!';
        console.log(message);
    }
    console.log(message);
}
example();



console.log('=======Number2======');


// Створіть функцію яка приймає массив оброблює його map  та повертає новий масив де є імя та середній бал студента



const students = [
    { name: 'Оля', scores: { math: 85, english: 78, science: 92 } },
    { name: 'Іван', scores: { math: 58, english: 74, science: 80 } },
    { name: 'Марія', scores: { math: 95, english: 85, science: 99 } },
    { name: 'Петро', scores: { math: 70, english: 65, science: 75 } },
  ];

  let newMapStudents = students.map((value)=>{
    return `Ім'я: ${value.name}, середній бал: ${value.scores = (value.scores.math + value.scores.english + value.scores.science)/3}`;
  });
  console.log(newMapStudents);


  //Відфільтруйте студентів за допомогою filter в яких середній бал вище 80 балів


  const filterStudents = students.filter((value)=>value.scores > 80);
  console.log(filterStudents);


  
  console.log('=======Number3======');


  console.log('=======Filter======');

//Використайте фільтер для того щоб отримати 2 массива з income та expense



  const transactions = [
    { id: 1, type: 'income', amount: 100 },
    { id: 2, type: 'expense', amount: 50 },
    { id: 3, type: 'income', amount: 150 },
    { id: 4, type: 'expense', amount: 70 },
    { id: 5, type: 'income', amount: 200 },
  ];

  const incomeArray = transactions.filter((value)=>value.type === 'income');
  console.log(incomeArray);

  const expenseArray = transactions.filter((value)=>value.type === 'expense');
  console.log(expenseArray);


  console.log('=======Map======');

  
  //Використайте map щоб зібрати всі дані в окремі масиви про  income та expense.  Та порахуйте сумарне значення для кожного з видів доходу чи роходу



const mapIncomeArray = incomeArray.map((value)=>{
    return value.amount;
});
const mapExpenseArray = expenseArray.map((value)=>{
  return value.amount;
});


const sumIncome = mapIncomeArray.reduce(reduceFn);
const sumExpense = mapExpenseArray.reduce(reduceFn);
function reduceFn(total, value){
    return total + value;
}

console.log(sumIncome);
console.log(sumExpense);



console.log('=======Number4======');


//Створіть функцію, яка приймає масив чисел, фільтрує ті, що більше 10, і повертає новий масив, що містить перші три елементи результату.

const arrFilter = [8,3,11,67,34,2,9,7,12];

const newArrFilter = arrFilter.filter((value)=>value>10);
const elementArr = newArrFilter.slice(0,3);
console.log(elementArr);



console.log('=======Number5======');


//Створіть функцію, яка приймає масив і два індекси, і повертає новий масив, що містить елементи між цими індексами, у зворотньому порядку.

let reverseArray = [4,5,8,2,67,1,6,0,11];
let indexArray = [];
function indexFn(array, index1, index2){
    indexArray = array.slice(index1, index2);
    return indexArray.reverse();
}

console.log(indexFn(reverseArray, 4, 7));



console.log('=======Number6======');


//Створіть функцію, яка приймає масив чисел, фільтрує парні числа, а потім повертає новий масив, де кожне парне число помножене на 2.


let numbersArray = [3,9,23,78,3,5,4,9,8,12,68];


let filterArray = numbersArray.filter((value)=>value %2 === 0);
let newNumbersArray = filterArray.map((value)=>value*2);
console.log(newNumbersArray);


console.log('=======Додаткове======');

//Використайте map щоб отримати сумму кожно вкладено массиву


const arrayOfArrays = [
    [1, 2, 3],
    [4, 5],
    [6, 7, 8, 9],
    [10]
  ];

  let sumMap = arrayOfArrays.map((array)=>
     array.reduce((total, value)=>
     total + value)
  );
 
  console.log(sumMap);
 
  
  