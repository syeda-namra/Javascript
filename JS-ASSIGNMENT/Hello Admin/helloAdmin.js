let users = ['Anum','Namra','Yusra','Admin','Safia','Ayisha','Komal','Areeba'];

for (i=0; i< users.length; i++){

    //gernal greetings
    if(users[i] !='Admin'){
        console.log(`Hello`,users[i]+`, thank you for logging in again.\n\n`);
    }

    //if user is admin
    else{
        console.log(`Hello`,users[i]+`, would you like to see a status report.\n\n`)
    }
}