let pName =`SYEDA Namra ali`;

console.log(`Lowercase: ` ,pName.toLowerCase());
console.log(`Uppercase: ` , pName.toUpperCase());

function titleCase(aName){
    aName = aName.toLowerCase();
    //console.log(aName);
    aName= aName.split(' '); // split use to break the variable on the basis of spaces into an array
    //console.log(`split`,aName);

    for (i=0; i< aName.length; i++)
    {
        aName[i]= aName[i].charAt(0).toUpperCase() + aName[i].slice(1);//slice return elements in a new array slice(starting point, ending  point (not inclusive))

        //console.log(aName);
        //aName.charAt(0).toUpperCase();
}
aName = aName.join(' ');
return aName;
}

console.log(`Titlecase: `,titleCase(pName));