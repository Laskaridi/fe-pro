//Number3

function stringFunction(item){
    let upperCaseStr = item.toUpperCase();
    let reverseStr = upperCaseStr.split('').reverse().join('');
    console.log(reverseStr);
}



export{stringFunction};