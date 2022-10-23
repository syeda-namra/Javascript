let magicians =["David Copperfield","Ricky Jay","Mark Wilson", "Harry Anderson", "Doug Henning"];

function show_magicians(arr){

    console.log(`Names of Magicians are: `);

    for(i=0; i< arr.length; i++){
        
        console.log(arr[i],`\n`);
    }
}

function great_magicians(arr){
    

    console.log(`\n\n\nGreat magicians names are: `);
    magNames = arr.slice();

    for(i=0; i< magNames.length; i++){
        
        magNames[i]="Great "+magNames[i];
        console.log(magNames[i],`\n`);
        
    }
    console.log(`\n\nUnchanged array:` ,arr);
    console.log(`\n\nChanged array:` ,magNames)
}

show_magicians(magicians);
great_magicians(magicians);

