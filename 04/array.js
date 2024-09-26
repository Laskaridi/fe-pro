let game1teamFirs = 10;
let game2teamFirs = 30;
let game3teamFirs = 25;

let gameResultsTeamFirst = [10, 20, 35];
console.log(gameResultsTeamFirst);

// let mySecondArray = new Array();
let mySecondArray = new Array(100);

console.log(mySecondArray);

// gameResultsTeamFirst = [11, 20, 35];
gameResultsTeamFirst[0] = 12;
gameResultsTeamFirst[1] = 22;
gameResultsTeamFirst[2] = 36;
gameResultsTeamFirst[10] = 'eleven';

console.log(gameResultsTeamFirst[7]);

let emptyArray = [,,,,,,,,,,,,,,];
console.log(emptyArray);

let firstUser = 'Tom';

let users = [firstUser, 'Bob', 'Ros', 'Nick', 'Diana'];
console.log(`Users length ${users.length}`);

function greatUser(user){
    console.log(`Hello user ${user} !`);
}

function sortUsers(data, callback){
    for (let index = 0; index < data.length; index++) {
        callback(data[index]);
    }
}



if(users.length>0){
    sortUsers(users, greatUser);
}
else{
    console.log(`No users in array`);
}

let moreUserData =[
    ['Tom', 'tom@gmail.com', 23],
    ['Nick', 'nick@gmail.com', 24],
    ['Anna', 'anna@gmail.com', 24],
    ['dana', 'dana@gmail.com', 24]
];

console.log(moreUserData[0]);
console.log(`user name ${moreUserData[0][0]}`);
console.log(`user email ${moreUserData[0][1]}`);
console.log(`use age ${moreUserData[0][2]}`);

for(let i=0; i<moreUserData.length; i++){
    // console.log(moreUserData[i]);
    for(let c = 0; c<moreUserData[i].length; c++){
        console.log(`user ifo ${moreUserData[i][c]}`);
    }
    console.log('========');
}

moreUserData[1] = null;
console.log(moreUserData);
console.log(moreUserData.length);
moreUserData[moreUserData.length] = ['New user', 'new@gmail.com', 19];

console.log(moreUserData);