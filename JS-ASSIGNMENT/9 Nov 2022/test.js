const getOrangeJuice =(cb)=> {
    setTimeout(()=>{
        console.log("making juice") //runs at the end
        return "juice";
     
    },1000)
    }


 const callback = (x)=>{

    console.log(x)
 }

 var result= getOrangeJuice(callback);
console.log("got juice",result);        //due to delay we got undefined, cz set timeout giving result after 1000miliseconds
