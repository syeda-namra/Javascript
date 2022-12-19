//step 7a & 7b

enum Color {Red,Green, Blue};   //start with 0
var c: Color = Color.Green;

enum Color1 {Red = 1, Green, Blue};





//cannot use const with enums


//step 8a 

//step 9

function buildName(firstNmae: string, lastName ="Khan") : string{
    if(lastName)
        return firstNmae + " " +lastName;
    else
        return firstNmae;
}

let result1 = buildName ("Bob");//if block execute
let result2 = buildName ("Bob", undefined);//if block executetsc
//let result3 = buildName ("Bob", "Adam", "Sr");//error too moany args
let result4 = buildName ("Bob","Adams")//correct



//

function buildName1(firstNmae: string, ...restofName: string[]) {
                  
        return firstNmae + " " + restofName.join(" ");
}                                                                      

//rest operator is used when we dont know the number of arguments given by the user in the form of array
//rest operator khdse array me leyga arguments ko

let employeeName = buildName1("Namra","Apsra","Aatka", "Farwah", "Ramsha");


//9f

function myCallback(text: string){
    console.log("inside myCallback " + text);
}



//9g method overlaoding


function add(arg1: string, arg2: string): string;
function add(arg1: number, arg2: number): number;
function add(arg1: string, arg2: boolean): boolean;

function add(arg1:any, arg2:any): any{
    return arg1 + arg2;
}

console.log(add(1,2));
console.log(add("Hello","World"));
//console.log(add(true ,false));

//any includes string, number & boolean


//step 10

//typescript is nothing to do with logic building

function addWithUnion(arg1 :string|number|boolean, arg2 : string|number|boolean) :string|number|boolean{
    
    if (typeof arg1 === "string")
        //execute if arg1 is string
        return arg1 + "is a string"
    
    if (typeof arg1 === "number")
        //execute if arg1 is number
        return arg1 + "is a number"

    // if (typeof arg1 === "boolean")
    else//used for treating error
        //execute if arg1 is boolean
        return arg1 && false;
}

//11

//Tuples -> restricted array
//sequence cannot be changed
//

var tuple: [number, string] = [1,"bob"]
var secondElement=tuple[1];//bob


