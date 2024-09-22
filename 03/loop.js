// console.log('Hello 1');
// console.log('Hello 2');
// console.log('Hello 3');
// console.log('Hello 4');

let counter = 1;
// do{
//     console.log(`Hello ${counter}`);
//     counter++;
// }while(counter<20);


// while(counter<5){
//     console.log(`Hello ${counter}`);
//     counter++;
// }

for(let i=5; i>3; i--){
    console.log(`Hello ${i}`);

}

for (let index = 0; index < 10; index++) {

    // if(index === 5){
    //     break;
    // }
    if(index%2 === 0 ){
        continue;
    }
    console.log(`Break value ${index}`);
}

document.write(`<table>`);
for (let i = 0; i < 3; i++) {
    document.write(`<tr>`);
        for (let c = 0; c < 4; c++) {
            document.write(`<td> Cell number ${c}</td>`); 
            
        }

    document.write(`</tr>`)
}
document.write(`</table>`)