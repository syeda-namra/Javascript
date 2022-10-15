let pName= `Syeda namra ali`;

document.write(`<h4>UpperCase </h4> `,pName.toUpperCase());

document.write(`<br><br><h4>LowerCase </h4> `,pName.toLowerCase());

// a
function titleCase(string){
    tName= string.toLowerCase().split(" ");
console.log(tName);
    for(i=0; i<tName.length; i++){
        console.log(tName)    ;
        tName[i]=tName[i][0].toUpperCase() + tName[i].slice(1);
console.log(i, `->` ,tName[i]);
console.log(tName[i][0]);
console.log(tName[i].slice(1));
}
   tName=tName.join(" ");
    //console.log(`TEXT `,tName);

    return tName;
    //console.log(tName);
}

document.write(`<br><br><h4>TitleCase </h4> `,titleCase(pName));
//document.write(pName.slice(1));