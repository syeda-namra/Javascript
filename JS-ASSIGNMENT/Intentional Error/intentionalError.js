let arr=["French","France","Himaliya","Juices","Black Sea"];

//console.log(arr);

for(i=0; i < arr.length; i++){
    if(typeof(arr[i]) == "string"){
        console.log(arr[i]);
    }
    else{
        console.log(`Intentional Error`);
    }
}
//Intentional Error
//arr[2]="x","y";

//console.log(arr);