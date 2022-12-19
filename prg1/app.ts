let myname: string | null;  // can assign more than 1 type

// myname =12 //error bcz number is not included in type
// myname=undefined; //error cz undefined is not included in type

let myAge: string | number;

myAge=24; //narrowing
console.log(myAge)

//.log(myAge.toLowerCase()); //error
 
myAge="twentyfour"  //narrowing
console.log(myAge.toLowerCase());

let newAge =Math.random()>0.6 ?"Khan":60

//console.log(newAge.toLowercase())

if(newAge ==="Khan") {
    //type of  newAge: string
    newAge.toUpperCase(); //can be called
}

if (typeof newAge == "string"){

    //type of newAge :string

    newAge.toUpperCase();//can be called
}


typeof newAge === "string"  //condition
? newAge.toUpperCase() // ok:string "?" is "if"
: newAge.toFixed(); //ok: number ":" is "else"

let age : number | "died" | "unknown"

age= 90
age = "died"  
age = "unknown" //ok
//age="living" //error
 
let namra: "namra"

namra = "namra"
//namra = "apsra" //error

let yourName =Math.random() > 0.6 ? "Hira Khan" : undefined

if (yourName){
    yourName.toUpperCase(); // ok:string
}

//yourName.toUpperCase(); //error: object is possibly undefined

yourName?.toUpperCase(); //ok cz of ? operator

//  You can also defined a type alias (selfmade type)
type RawData =boolean | number | string |null |undefined

let data : RawData

data = 0.98
 
//You can even combine them

type Id = number | string;

type IdMaybe = Id | undefined | null;

let num : IdMaybe;

num =79;
num ="trttrtyh"

//objects Type Declaration

let student:{
    name: string;
    age: number;
}

student ={
    name: "Namra",
    age: 30,
} 

console.log(student.age)
console.log(student["name"])

//interface

interface Ball {
    diameter :number
}


interface Sphere {
    diameter :number
}

let ball : Ball = {diameter:10};
let sphere : Sphere = {diameter:20}
 
sphere = ball;
ball = sphere;
//structurally members of ball & sphere are same 

interface Tube {
    diameter :number,
    length : number    
}

let tube :Tube={diameter :30 , length :10}

ball =tube;//allowed

//tube =ball; //not allowed cz tube has an extra attribute of "length" which is not in ball 



//cases
var x : { id :number, [x:string] :any}

x = {id: 2, firstName: "Namra", lastName :"Ali" ,middleName:"", age :"fkgizf"};

//case

let myType ={id:1, name: "Namra"};

myType = {id:2, name: "Apsra"}

//myType ={ id:3, p_name:"Aatka", age :28}

