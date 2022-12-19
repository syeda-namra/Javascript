let myname; // can assign more than 1 type
// myname =12 //error bcz number is not included in type
// myname=undefined; //error cz undefined is not included in type
let myAge;
myAge = 24; //narrowing
console.log(myAge);
//.log(myAge.toLowerCase()); //error
myAge = "twentyfour"; //narrowing
console.log(myAge.toLowerCase());
let newAge = Math.random() > 0.6 ? "Khan" : 60;
//console.log(newAge.toLowercase())
if (newAge === "Khan") {
    //type of  newAge: string
    newAge.toUpperCase(); //can be called
}
if (typeof newAge == "string") {
    //type of newAge :string
    newAge.toUpperCase(); //can be called
}
typeof newAge === "string" //condition
    ? newAge.toUpperCase() // ok:string "?" is "if"
    : newAge.toFixed(); //ok: number ":" is "else"
let age;
age = 90;
age = "died";
age = "unknown"; //ok
//age="living" //error
let namra;
namra = "namra";
//namra = "apsra" //error
let yourName = Math.random() > 0.6 ? "Hira Khan" : undefined;
if (yourName) {
    yourName.toUpperCase(); // ok:string
}
//yourName.toUpperCase(); //error: object is possibly undefined
yourName?.toUpperCase(); //ok cz of ? operator
let data;
data = 0.98;
let num;
num = 79;
num = "trttrtyh";
//objects Type Declaration
let student;
student = {
    name: "Namra",
    age: 30,
};
console.log(student.age);
console.log(student["name"]);
let ball = { diameter: 10 };
let sphere = { diameter: 20 };
sphere = ball;
ball = sphere;
let tube = { diameter: 30, length: 10 };
ball = tube; //allowed
//tube =ball; //not allowed cz tube has an extra attribute of "length" which is not in ball 
//cases
var x;
x = { id: 2, firstName: "Namra", lastName: "Ali", middleName: "", age: "fkgizf" };
//case
let myType = { id: 1, name: "Namra" };
myType = { id: 2, name: "Apsra" };
export {};
//myType ={ id:3, p_name:"Aatka", age :28}
