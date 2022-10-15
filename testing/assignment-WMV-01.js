var personName=`Namra`;
document.writeln(`Q1 `);
document.writeln(`Hello `,personName+`, would you like to learn some Python today?`);
age = 25;
console.log(age);
var person=`Zayan`;
document.writeln(`Q2 `);
document.writeln(person.toUpperCase());
document.writeln(person.toLowerCase());
console.log(typeof age);


//userName = prompt("what is your name?");
var userName = "test";
document.writeln(userName + "<br/>");
document.writeln(userName.toLowerCase() + "<br/>");
document.writeln(userName.toUpperCase() + "<br/>");
console.log(typeof userName);


/** get element by id*/

var redText = document.getElementById("red");                  // $("#red").text().
var yellowText = document.getElementById("yellow");
var orangeText = document.getElementById("orange");

console.log(redText);
//yellowText.innerText = redText.innerText;

function  likeEvent(obj){
    alert("You liked it.");
    obj.style.color = "green";   // $(obj).css("color","green"); 
    obj.innerText = "Liked";
}


<div>
<p></p>

</div>



let number1 = 6;
let number2= 8;
/*console.log (`number1 =`,number1);
console.log(`number2 =`,number2);
console.log (`number1+number2 =`,number1 + number2);
console.log(`number1-number2 =`,number1-number2 );
console.log(`number1*number2 =`,number1*number2);
console.log(`number1/number2 =`,number1/number2);
console.log(`number1%number2 =`,number1%number2);
console.log(`number1**number2 =`,number1**number2)
console.log(`++number2 =`,++number2);
console.log(`number1++ =`,number1++);
console.log(`number1 = `,number1);
console.log(`number2 =`,number2);
console.log(`--number1 =`,--number1);
console.log(`number1-- =`,number1--);
*/
