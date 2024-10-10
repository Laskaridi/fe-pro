let nowDate = new Date();
console.log(nowDate);

// new Date(year, month, hours, minutes, seconds, ms);

// month 0-січень 11 - грудень
// 1 - 31
// hours 0-23
//second, minutes 0 -59
// ms 0 - 999 

// console.log(new Date(1995, 0, 4, 40, 0));

let firstMonth = new Date(2000, 0);
console.log(firstMonth);

console.log(`Day info ${nowDate.getDate()}`);
console.log(`Day number info ${nowDate.getDay()}`);
console.log(`Month number info ${nowDate.getMonth()}`);
console.log(`Hours info ${nowDate.getHours()}`);
console.log(`Minutes info ${nowDate.getMinutes()}`);
console.log(`Seconds info ${nowDate.getSeconds()}`);

console.log(`Format time ${nowDate.toJSON()}`);
console.log(`Format time ${nowDate.toDateString()}`);
console.log(`Format time ${nowDate.toUTCString()}`);