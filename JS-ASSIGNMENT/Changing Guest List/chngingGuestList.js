let guestList = [`Anum`, `Aisha`, `Komal`, `Tooba`];

for(i=0; i < guestList.length; i++)
{
    console.log(`Hey`,guestList[i]+`! you're invited for a dinner tonight.\nSee ya soon buddy! :)\n\n`);
}

//finding the index of the guest who is not comming for dinner
const ind= guestList.indexOf(`Komal`);

console.log(`Due to some personal reasons`,guestList[ind],`is not able to make it to the dinner.`);

//console.log(ind);
//updatedGuestList = guestList.replace( `Komal`,`Adoos`);

//Replacing the guest(who is not coming) with another guest
guestList.splice(ind,1,`Adoos`); // splice method remove a value from a particular index at replace(or add) another value
                                // splice(index to be removed(or to add),how many,with what value to be replaced)
                                // splice method updates the values & store it in a given variable(or array)


console.log(`\n\n--Updated Guests Invites--\n\n`);

for(i=0; i < guestList.length; i++)
{
    console.log(`Hey`,guestList[i]+`! you're invited for a dinner tonight.\nSee ya soon buddy! :)\n\n`);
}
