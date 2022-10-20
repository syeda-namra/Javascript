let locations=[`Saudia Arab`,`Turkey`,`Malaysia`,`Australia`,`Canada`];

//original order
console.log(`Original Order:`,locations);

travel= locations.slice();      //slice() copies the array without changing the original array

//alphabetical order
console.log(`\n\nAlphabetical order:`+travel.sort());      //sort() method  frist change the array into string & then arrange the array in ascending order and saving it into the original array

//original order
console.log(`\n\nOriginal Order:`,locations+`\n\n`);

destination = travel.slice();                               //here we use travel because it give us the array in alphabetically ascending order

//reverse alphabetical order
console.log(`\n\nReverse alphabetical order:`+destination.reverse());      //reverse() method arrange the array in descending order and saving it into the original array


//original order
console.log(`\n\nOriginal Order:`,locations+`\n\n`);

//mutating the original array
console.log(`\nReverse order:`,locations.reverse());

//again geting the original order
console.log(`\n\nAgain Original Order:`,locations.reverse());

//sort in alphabetical order
console.log(`\n\nAlphabetical order:`+locations.sort());

//reverse alphabetical order
console.log(`\n\nReverse alphabetical order:`+locations.reverse());