let guestList = ["Anum", "Aisha", "Komal", "Tooba"];

for(i=0; i < guestList.length; i++)
{
    console.log(`Hey`,guestList[i]+`! you're invited for a dinner tonight.\nSee ya soon buddy! :)\n\n`);
}
const ind= guestList.indexOf(`Komal`);

console.log(`Due to some personal reasons`,guestList[ind],`is not able to make it to the dinner.`);

//console.log(ind);
//updatedGuestList = guestList.replace( `Komal`,`Adoos`);

guestList.splice(ind,1,"Adoos"); // splice method remove a value from a particular index at replace(or add) another value
                                // splice(index to be removed(or to add),how many,with what value to be replaced)
                                // splice method updates the values & store it in a given variable(or array)


console.log(`\n\n--Updated Guests Invites--\n\n`);

for(i=0; i < guestList.length; i++)
{
    console.log(`Hey`,guestList[i]+`! you're invited for a dinner tonight.\nSee ya soon buddy! :)\n\n`);
}

console.log(`Total guests for the dinner (before bigger dinner table) are`,guestList.length,`\n\n`);

console.log('Hey everyone I just found a bigger dinner table so now I can invite some more friends :)');

//Adding one new guest in begining of an array
guestList.unshift("Safiya");

//finding index of middle of the array
const index= Math.round(guestList.length/2);
//console.log(index);

//Adding one new guest in the middle of the array
guestList.splice(index,0,"Yusra");


for(i=0; i < guestList.length; i++)
{
    console.log(`Hey`,guestList[i]+`! you're invited for a dinner tonight.\nSee ya soon buddy! :)\n\n`);
}

console.log(`Total guests for the dinner (after bigger dinner table) are`,guestList.length);

export {guestList};