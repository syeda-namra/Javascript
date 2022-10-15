let distanceMiles = parseFloat(prompt("Enter distance in miles : "));
console.log(`distance in Miles `,distanceMiles);

document.write(`The distance in miles is : `,distanceMiles ,`<br>`);

let distanceKms = distanceMiles/1.60934; //conversion formula

distanceKms= distanceKms.toFixed(2); // after decimal takes 2 digits
console.log(`distance in Kms `,distanceKms);

document.writeln(`The distance in kms is : `,distanceKms, `<br><br>`);

document.write(`The distance of <b>`,distanceKms,` kms</b> is equal to <b>`,distanceMiles,` miles</b>.`);