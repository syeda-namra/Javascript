import inquirer from "inquirer";
import Choice from "inquirer/lib/objects/choice.js";

let balance = 500;
let enteredAmount : number;

let answer = await inquirer.prompt([{
    name:"Name",
    type:"string",
    message:"Enter your Name:"
},

{
    name:"Password",
    type:"password",
    message:"Enter your Password:"
},

{
    name: "Transaction",
    type: "list",
    choices: ["Balance Inquiry" , "Fast Cash", "Pay Bills"],
    message: "Please select"
},

function balanceInquiry(bal: number=balance){

    balance =bal +balance;
    console.log(`Rs.${balance}`)
},

function fastCash(balance:number){


    if (balance > 500 && enteredAmount != 0){

        balance =balance - enteredAmount;

        console.log(`Remaining balance in your account is Rs.${balance}`);
    }
    else{
        console.log(`Insufficient Balance`);
    }
}


]);

