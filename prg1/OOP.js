//STEP 11
//CLASS IS A BLUEPRINT
//OBJECT INTERACTS WITH EACHOTHER INSTANCE  
//PILLARS OF OOP
//1-Inheritance
//2-Encapsulation ->>implementation level
//3-Polymorphism
//Abstraction (not actually the pillar of OOP but tightly coupled with it.) structural level
class Point {
    x;
    y;
}
//JS me evrything on runtime
//Object
const pt = new Point();
pt.x = 0;
pt.y = 0;
// for object sbse pehly constructor function chlta hai 
class GoodGreater {
    name;
    constructor() {
        this.name = "hello"; //this referr the current class instance variable
    }
}
//! -> definite assignment insertion operator
class OkGreeter {
    name;
}
class Greeter {
    name = "world";
    //constructor also used to assign default values
    constructor(otherName) {
        if (otherName != "undefined") {
        }
    }
}
//overloading different number of arguments 
//INHERITANCE
class Base {
    k = 4;
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
class Derived extends Base {
    constructor() {
        super(); //error nhe ayega 
        console.log(this.k);
        //super is  used to call parent class constructor
    }
}
//methods
class Point1 {
    x = 10;
    y = 10;
    scale(n) {
        this.x *= n;
        this.y *= n;
    }
}
let x = 0;
class C {
    x = "hello";
    m() {
        //x= world;//cannot assign string to a number ; referring x which is outside the class
        this.x = "world"; //with the help of this we refer to x which is inside a class
    }
}
//GETTERS & SETTERS => accessories
class DC {
    _length = 0;
    get length() {
        return this._length;
    }
    set length(value) {
        this._length = value;
    }
}
var dc = new DC();
dc.length = 1; //setter
console.log(dc.length); //getter
class Thing {
    _size = 0;
    get size() {
        return this._size;
    }
    set size(value) {
        let num = Number(value);
        //donot allow NaN, Infinity etc
        if (!Number.isFinite(num)) {
            this._size = 0;
            return;
        }
        else {
            console.log(typeof num + "Invalid Number");
        }
        this._size = num;
    }
}
export {};
