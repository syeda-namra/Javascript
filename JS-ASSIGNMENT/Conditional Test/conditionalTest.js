let city = `Karachi`;
console.log(`If city(Karachi) is == "Karachi", I predict True.`)
console.log(city == 'Karachi');

let country = `Pakistan`;
console.log(`If country(Pakistan) is == "pakistan", I predict False.`);
console.log( country === 'pakistan');           //case sensitive

let comp = 5;
console.log(`If comp(5) is > 10, I predict False.`);
console.log(comp > 10);

let age = "18.00";
console.log(`If age("18.00") is == 18, I predict False.`);
console.log(age === 18);

console.log(`If age("18.00") is !== 18, I predict True.`);
console.log(age !== 18);

let test1 = 50;
console.log(`If test1(50) is !== 50, I predict False.`);
console.log(test1 !== 50);

let score = 1+2*5;                                  //numbers adding 1+2*5 gives 11
console.log(`If score(1+2*5) is === 11, I predict Ture.`);
console.log(score === 11);

let language = `English`;
console.log(`If language is == "English", I predict True.`);
console.log(language == `English`);

let bands = 7.5;
console.log(`If bands(7.5) is  === "7.5", I predict False.`);        //value + data type checking
console.log(bands === '7.5');

console.log(`If bands(7.5) == "7.5", I predict True.`);              //only value checking
console.log(bands == '7.5');

let education = `Graduation`;
console.log(`If education(Graduation) is == "Graduation", I predict True.`);
console.log(education == `Graduation`);

let subject = `Computer Science`;
console.log(`If subject("Computer Science") is == "Computer Science", I predict True.`);
console.log(subject == `Computer Science`);

let lessEqui = 20;
console.log(`If lessEqui(20) is >= 19.9, I predict True.`);
console.log(lessEqui >= 19.9);

let expression = '2+2';
console.log(`If expression('2+2') is === 4, I predict False.`);
console.log(expression === 4);

let expression1 = 2+2;              //a  number
console.log(`If expression1(2+2) is === "4", I predict False.`);
console.log(expression1 === `4`);


let maths = 4;
console.log(`If maths(4) is == 2+2, I predict True.`);
console.log(maths ==  2+2);             //adding 2 + 2 gives 4 i.e. a number 

let val = "4";
console.log(`If val("4") is == "2+2", I predict False.`);        // both are strings but values are not same
console.log(val == "2+2");                          //only checking values & value is not same