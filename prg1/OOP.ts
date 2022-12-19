//STEP 11

//CLASS IS A BLUEPRINT
//OBJECT INTERACTS WITH EACHOTHER INSTANCE  
//PILLARS OF OOP
    //1-Inheritance
    //2-Encapsulation ->>implementation level
    //3-Polymorphism
    //Abstraction (not actually the pillar of OOP but tightly coupled with it.) structural level

class Point{

    x !:number;
    y !:number;

}
//JS me evrything on runtime
//Object
const pt = new Point();
pt.x =0;
pt.y =0;

// for object sbse pehly constructor function chlta hai 
class GoodGreater {

    name: string;

    constructor() {
        this.name = "hello";            //this referr the current class instance variable
    }

}

//! -> definite assignment insertion operator
class OkGreeter{
    name !: string;
}

class Greeter {

    readonly name : string ="world";

    //constructor also used to assign default values
    constructor(otherName? :string){

        if(otherName != "undefined")
            {

            }
    }
}

//overloading different number of arguments 


//INHERITANCE

class Base{
    k=4;
}

// class Derived extends Base{
//     constructor(){
//         //error
//         console.log(this.k)
//         //super is  used to call parent class constructor
//        // super is used before accessing this in the constructor of derived  
//        super() ;    
//     }
// }
// super also used to call parent class methods & variables.
class Derived extends Base{
    constructor()//custor of derived class
    {
        
        super()//error nhe ayega 
        console.log(this.k)
        //super is  used to call parent class constructor
               
    }
}

//methods



class Point1{

    x = 10;
    y = 10;


scale(n:number) :void 
    {

        this.x *=n;
        this.y *=n;
    }

}      


let x : number =0;

class C{

    x : string ="hello";

    m(){
        //x= world;//cannot assign string to a number ; referring x which is outside the class
        this.x ="world";//with the help of this we refer to x which is inside a class
    }
}

//GETTERS & SETTERS => accessories

class DC{
    private _length =0;
    
    get length(){

        return this._length;

    }

    set length(value){

        this._length =value;

    }
}
var dc = new DC();
dc.length=1;//setter
console.log(dc.length)//getter

class Thing{

    _size =0;

    get size():number{
        return this._size
    }

    set size(value : String | Number | boolean){

        let num = Number(value);

        //donot allow NaN, Infinity etc

        if(!Number.isFinite(num)){
            this._size=0;
            return;
        }

        else{
            console.log(typeof num + "Invalid Number");
        }

        this._size=num;
    }

}