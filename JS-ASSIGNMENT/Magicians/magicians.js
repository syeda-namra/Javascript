let magicians =["David Copperfield","Ricky Jay","Mark Wilson", "Harry Anderson", "Doug Henning"];

function show_magicians(arr){

    console.log(`Names of Magicians are: `);

    for(i=0; i< arr.length; i++){
        
        console.log(arr[i],`\n`);
    }
}

show_magicians(magicians);