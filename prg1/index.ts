import inquirer from "inquirer"; //prompt in node Module
import chalk from "chalk";
import a from "./first.js";  //ECMA script module //ECMA Module Standard
//--after modifying tsconfig.json
//--import a from "./first.js";
import {b,c}  from "./second.js";
//import {b, c as d} from "./second";
//--import {b,c} from "./second.js;"

let msg ="I'm hungry";
console.log(msg);
//msg= 6;

console.log(a);
console.log(b,c);
//console.log(b,d);
console.log(a+b+c);
//console.log(a+b+d);

  
let answer = await inquirer.prompt([{
    name:"age",
    type:"number",
    message:"Enter your Age:"
}]);

console.log("Insha Allah, in " +(60 - answer.age)+"years you will be in 60 years old")