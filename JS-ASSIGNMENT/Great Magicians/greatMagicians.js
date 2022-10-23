let magicians =["David Copperfield","Ricky Jay","Mark Wilson", "Harry Anderson", "Doug Henning"];

function show_magicians(arr){

    console.log(`Names of Magicians are: `);

    for(i=0; i< arr.length; i++){
        
        console.log(arr[i],`\n`);
    }
}

function great_magicians(arr){
    

    console.log(`\n\n\nGreat magicians names are: `);

    for(i=0; i< arr.length; i++){
        
        arr[i]="Great "+arr[i];
        console.log(arr[i],`\n`);
        
    }

    console.log(arr);
}

show_magicians(magicians);
great_magicians(magicians);

