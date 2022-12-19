class Uni{
    uniName: string | undefined;
    address: string | undefined;
    numberOfDepartments : number | undefined;

    // enroll(name: string | undefined, id:number|undefined):void {
        
    // }

    // constructor(){   

    //    this.uniName;
    //    this

    // }

}

class Human{

    name : string |undefined;
    age : number | undefined;
    typeH : "teacher" | "student" | undefined;

   

}

class Student extends Human{

    numberOfCourse: number | undefined | any;
    
    //courseList is an array
    courseList : (string)[] | undefined;
  
    

    // attendance :number|undefined;
    
        attendance(presence :Boolean | undefined, courseList : string[] | undefined) :void{
        
        for(let i=0; i< this.numberOfCourse; i++){    
            //condition
            presence === true || 1 && courseList != null
            //if
            ? console.log(`${this.name} is present in `, courseList[i], `& is ${this.age} years old.`)
            //else
            : console.log(`${this.name} is absent in `, this.courseList[i], `& is ${this.age} years old.`);
        }
    }
        details(){
            console.log(`${this.name} has age ${this.age} & is a ${this.typeH} & is enrolled in ${this.numberOfCourse} courses namely: ${this.courseList}`);
        }

        
}

class Teacher extends Human{

    teacherCourse: string | number | undefined;
    qualification: string | undefined;
    private t_salary: number | undefined;

    get salary(){
        return this.t_salary;
    }

    set salary(value){
        this.t_salary =value;        
    }

}

let institute01 = new Uni();
institute01.uniName="JUW";
institute01.address="KHI";
institute01.numberOfDepartments=3;

console.log(institute01);

let st1= new Student();
st1.name="Namra";
st1.typeH="student";
st1.age=26;
st1.numberOfCourse= 2;
st1.courseList=["CS108","OOP","DS"];
st1.attendance(true, st1.courseList);
st1.details();

//console.log(st1);
