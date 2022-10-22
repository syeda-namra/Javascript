let users = ['Anum','Namra','Yusra','Admin','Safia','Ayisha','Komal','Areeba'];

//runs when users list is not empty originally
if(users.length != 0){
    len = users.length;

    for (i=0; i<=len; i++){
        //console.log(i,users.length);
        users.pop();
        
        //print this statement when users list is empty
        if(users.length==0){
            console.log(`We need to find some users.`)
        }
       
    }

    
}
//runs when users list originally is not empty
else{
    console.log(`No user found.`);
}