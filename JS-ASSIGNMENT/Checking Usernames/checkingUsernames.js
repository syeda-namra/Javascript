let current_users = ['Anum','Namra','Yusra','Safia','Aisha'];
console.log(current_users);

let new_users = ['namra','Komal','SaFia','Areeba','ANUM'];
console.log(new_users);

//map function is use to for each element in an array into lowercase to make the program case insensitive.
current_users = current_users.map (element => {
    return element.toLowerCase();
  });

//console.log(current_users);

new_users = new_users.map (element => {
    return element.toLowerCase();
  });

//console.log(new_users);

//loop runs for all the elements present in new_users
for(i=0; i < new_users.length; i++){

    //console.log(new_users[i],len);

    //includes method check whether particular element is in the array
    if(current_users.includes(new_users[i])){
        console.log(`Enter a new username.`);

    }else{
        console.log(new_users[i]+`, username is available.`);
    }
}

