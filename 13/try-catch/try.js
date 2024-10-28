let user = {
    userName:'Tom',
    // userAge:22
}

try{
    console.log(`User info ${user.userAge}`);
    // if(!user.userAge){
    //     throw new SyntaxError('No information abou user age');
    // }
}
catch(e){
    console.log(e);
    console.log(`Error message ${e.message}`);
    console.log(`Error name ${e.name}`);
    console.log(`Error stack ${e.stack}`);
}
finally{
    console.log(`Any situation!`);
}