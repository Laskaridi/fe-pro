// == Виконує порівння з приведенням типів. false true
console.log(`Compare 2 and 3 ${2==3}`);
console.log(`Compare 2 and 2 ${2==2}`);
console.log(`Compare 2 and '2' ${2=='2'}`); // '2' == '2'
console.log(`Question null == undefinde ${null == undefined}`);
console.log(`Compare Max and MaX ${'Max'=='MaX'}`);
console.log(`Compare Max and Tom ${'Max'=='Tom'}`);
// Spider Man   SpIdER maN -> SPIDER MAN  == SPIDER MAN 

// 2 не дорівнює 3  Max не дорівнює MaX  !=
console.log('=========================');
console.log(`Not equal 2 and 3 ${2!=3}`);
console.log(`Not equal 2 and 2 ${2!=2}`);
console.log(`Not equal 2 and '2' ${2!='2'}`); // '2' == '2'
console.log(`Question null == undefinde ${null != undefined}`);
console.log(`Not equal Max and MaX ${'Max'!='MaX'}`);
console.log(`Not equal Max and Tom ${'Max'!='Tom'}`);

// ===
console.log('===');

console.log(`Compare 2 and 3 ${2===3}`);
console.log(`Compare 2 and 2 ${2===2}`);
console.log(`Compare 2 and '2' ${2==='2'}`); // '2' == '2'
console.log(`Question null == undefinde ${null === undefined}`);
console.log(`Compare Max and MaX ${'Max'==='MaX'}`);
console.log(`Compare Max and Tom ${'Max'==='Tom'}`);
console.log('Test value');
console.log(`Compare 1 and true ${1==true}`);
console.log(`Compare 1 and true ${1===true}`);

// > < >= <= 
console.log('======= >, <, ==============');
console.log(`Compare 2>3 ${2>3}`);
console.log(`Compare '3'>2 ${'3'>2}`);
console.log(`Compare 2>2 ${2>2}`);


console.log(`Compare 2<3 ${2<3}`);
console.log(`Compare 20<30 ${20<30}`);
console.log(`Compare 20<20 ${20<20}`);


console.log('<=');
console.log(`Compare 20<=20 ${20<=20}`);
console.log(`Compare 2>=2 ${2>=2}`);


// &&
// 2>1 && 3>2  ->true  true && true = true
// true && false = false
// false && true = false
// false && false = false

let enterPassword = '12345';
let userPassword = '12345' === enterPassword;
let userNickName = 'admin';
let checkAdmin = 'admin' === userNickName;

let adminEnter = userPassword && checkAdmin; // true


// ||
// 2>1 || 3>4 = true;  true || fase = true;
// false || true = true;
// true || true = true;
// false || false = false;

let userLogin = true;
let userAge = 17;
let isAdmin = false;

let continueShoping = userLogin === true || userAge>18 || isAdmin === true;
console.log(continueShoping);