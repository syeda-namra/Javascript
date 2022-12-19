import inquirer from "inquirer";
let balance = 500;
let answer = await inquirer.prompt([{
        name: "Name",
        type: "string",
        message: "Enter your Name:"
    },
    {
        name: "Password",
        type: "password",
        message: "Enter your Password:"
    },
    {
        name: "Transaction",
        type: "list",
        choices: ["Balance Inquiry", "Fast Cash", "Pay Bills"],
        message: "Please select"
    },
    function balanceInquiry(bal) {
        balance = bal + balance;
        console.log(`Rs.${balance}`);
    }
]);
console.log(answer.balanceInquiry(200));
