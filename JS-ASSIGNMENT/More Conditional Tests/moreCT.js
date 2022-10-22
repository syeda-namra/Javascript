//test for equality of strings
let strng1 = `Metaverse`;
console.log(`If strng1("Metaverse") is === "Metaverse", I predict True.`);
console.log(strng1 === 'Metaverse');

let strng2 = `2+2`;
console.log(`If strng2("2+2") is == "4", I predict False.`);
console.log(strng2 == '4');

//test for inequiality of strings
let st1 = "Pakistan";
console.log(`If st1("Pakistan") is !== "Pakistan", I predict False.`);
console.log(st1 !== 'Pakistan');

let st2 = "16";
console.log(`If st2("16") is != "17", I predict True.`)
console.log(st2 != "17");

//test using lowercase function
let city = "Karachi";
console.log(`If city.toLowerCase("Karachi") is ==  "KARACHI".toLowerCase, I predict True.`);
console.log(city.toLowerCase === "Karachi".toLowerCase);

let food = "Mexican Sandwhich";
console.log(`If food.toLowerCase("Mexician Sandwhich") is ==  "Mexican Sandwhich", I predict False.`);
console.log(food.toLowerCase === "Mexican Sandwhich");

//test using greater than equal to 
let bands = 7.5;
console.log(`If bands(7.5) is  >= 7.6, I predict False.`);        
console.log(bands >= 7.6);

let score = 88;
console.log(`If score(88) is  >= 88.00, I predict True.`);        
console.log(score >= 88.00);

//test using less than equal to
let a = 6;
let b = 8;
console.log(`If a(6) is <= b(8), I predict True.`);        
console.log(a <= b);

let c = 20 + 2.02 ;
let d = 22.01;
console.log(`If c(20+2.02) is <= d(22.01), I predict False.`);        
console.log(c <= d);

//test for less than
console.log(`If a(6) is < d(22.01), I predict True.`);
console.log(a<d);

//test for greater than
console.log(`If b(8) is > c(20+2.02), I predict Flase.`);
console.log(b>c);

//test for equality
console.log(`If a(6) is !== "6",I predict True.`);
console.log(a !== "6");

//test using and operator
let age = 18.5;
console.log(`If age >= 18 && bands != 6.5, You are eligible`);
if(age >= 18 && bands != 6.5){
    console.log(`true`);
}else{
    console.log(`false`);
}

//test using or operator
console.log(`If a>d || a>c, a is greatest of all.`)
if(a>d || a>c){
    console.log(`true`);
}
else{
    console.log(`false`);
}

//array
let fruits =["apple","mango","pomegrante","guava","grapes","kiwi","papaya","pineapple","orange","banana"];
console.log(fruits);

//test an item within an array
console.log(`fruits.include("kiwi")`);
console.log(fruits.includes("kiwi"));

//test an item not in an array
console.log(`fruits.include("cherry")`);
console.log(fruits.includes("cherry"));
