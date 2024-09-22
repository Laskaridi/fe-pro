// let value = prompt('Hello type your level');

// switch(value){
//     case 'admin':
//         console.log('Hello admin');
//         break;
//     case 'user':
//         console.log('Hello user');
//         break;
//     default:
//         console.log(`Any info about ${value}`);
// }

let productPriceByName = prompt('Type product name');

// DRY don't repeat yourself
switch(productPriceByName){
    case 'banan':
    case 'milk':
    case 'Milk':
        console.log(`${productPriceByName} 1.25$`);
        break;
    case 'orange':
        console.log(`${productPriceByName} 0.45$`);
        break;
    default:
        console.log(`${productPriceByName} any ifo`);
        break;
}