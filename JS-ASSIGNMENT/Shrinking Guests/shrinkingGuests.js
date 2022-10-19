let guestList = [`Anum`, `Aisha`, `Komal`, `Tooba`];

for(i=0; i < guestList.length; i++)
{
    console.log(`Hey`,guestList[i]+`! you're invited for a dinner.\nSee ya soon buddy! :)\n\n`);
}
const ind= guestList.indexOf(`Komal`);

// one person not able to make it to the dinner
console.log(`Due to some personal reasons`,guestList[ind],`is not able to make it to the dinner.`);

//console.log(ind);
//updatedGuestList = guestList.replace( `Komal`,`Adoos`);

guestList.splice(ind,1,`Adoos`); // splice method remove a value from a particular index at replace(or add) another value
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
guestList.unshift('Safiya');

//finding index of middle of the array
const index= Math.round(guestList.length/2);
//console.log(index);

//Adding one new guest in the middle of the array
guestList.splice(index,0,`Yusra`);


for(i=0; i < guestList.length; i++)
{
    console.log(`Hey`,guestList[i]+`! you're invited for a dinner tonight.\nSee ya soon buddy! :)\n\n`);
}

console.log(`Total guests for the dinner (after bigger dinner table) are`,guestList.length,`\n\n\n\n`);// after bigger dinner table

//Shrinking Guest List

console.log(`\n\n\n---AH!! I can invite only two people due to the unavaibility of bigger dinner table.---\n\n`);


 
console.log(`Guest List:`,guestList);


//pop()  function removes last element from the array & store it

//excluded guest list msg
for(i=0; i<=guestList.length; i++) {

    //let exculdeGuest =guestList.pop();
    console.log(guestList.pop()+`, sorry I can't invite you for the dinner. :(\n`);

    //console.log(`EXCLUDED: `,guestList.pop());

}

//pop()  function removes last element from the array & store it

//i<=guestList.length ----> "=" for making sure that the must popout all of its elements.
for(i=0; i<=guestList.length; i++){
    
    console.log();
    console.log(`\n`+guestList.pop()+`, waiting for you at the dinner.\nSee ya soon.\n\n`);

}

console.log(`Empty Guest List: `,guestList);

