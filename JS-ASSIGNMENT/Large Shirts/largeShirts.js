function make_shirt(size = "medium"){
    
    let msg="Just code & chill.";
    
    //convert the case & match it according to condition to print msg.
    size = size.toLowerCase();

    //general msg for all sizes
    console.log(`The shirt is in`,size,`size.`);

    if(size=="medium"|| size=="m"|| size=="large" || size == "l")
    {
        
        console.log(`I love Javascript.`+`\n\n`);
    }
    else{
        console.log(msg+`\n\n`);
    
    }
}
let s1= `Medium`;
//let msg1='Be your own hero.';

let s2='Small';
//let msg2=`Live in your world.`

let s3="Large";

let s4="XL"

make_shirt(s1);

make_shirt(s2);

make_shirt(s3);

make_shirt(s4);

make_shirt("l");

make_shirt();