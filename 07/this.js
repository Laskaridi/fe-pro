"use strict";

let userInfo = {
    usrerName:'Tom',
    aboutUser:function(){
        console.log(`user name ${this.usrerName}`);
    }
    // aboutUser:()=>{
    //     console.log(`user name ${this.usrerName}`);
    // }
}

userInfo.aboutUser();

let testValue = this;
console.log(testValue);
console.log(this);

// myValue = 10; буде помилка з use strict без оголошення  змінної let, var, const
// console.log(myValue);

function summ(a,a){
    return a+a;
}
console.log(summ(2,4));