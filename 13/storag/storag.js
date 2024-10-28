// https
// http !
document.cookie = "user=Tom; SameSite=None; Secure";
document.cookie = "userSecond=Den; SameSite=Strict; Secure";
document.cookie = "userDate=Bob; SameSite=Strict; Secure; expires=28 Oct 2024 19:37:47 GMT";

// document.cookie = "userTime=Time; SameSite=None; Secure; max-age=300";
document.cookie = "userTime=Time; SameSite=None; Secure; max-age=0";


console.log(document.cookie);
// Last Accessed:"Thu, 24 Oct 2024 17:37:47 GMT"



window.localStorage.setItem('userMenuState', 'False');
window.localStorage['keyStorage'] = 'Test text value';
window.localStorage.simpleKey = 'Simple value';

let todoList = [
    {todo:'Buy milk'},
    {todo:'Buy orange'}
]

// window.localStorage.todoValue = todoList;
window.localStorage.todoValue = JSON.stringify(todoList);

console.log(window.localStorage.getItem('simpleKey'));
console.log(window.localStorage.userMenuState);
console.log(window.localStorage['keyStorage']);
console.log(window.localStorage.todoValue);
let storageValue = window.localStorage.todoValue; // JSON


// window.localStorage.todoValue = JSON.stringify({todo:'Buy orange 22222'});

let parseValue = JSON.parse(window.localStorage.todoValue);
console.log(parseValue);
todoList.push({todo:'Buy orange22222'});
window.localStorage.todoValue = JSON.stringify(todoList);
// let test = [1,2,3];
// parseValue.forEach(element => {
//     console.log(element.todo);
// });

window.localStorage.removeItem('simpleKey');
window.localStorage.removeItem('keyStorage');

// window.localStorage.clear();

console.log(window.localStorage.getItem('simpleKey'));