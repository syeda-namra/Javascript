let sandwich= new Array();

function making_sandwich(){

    console.log(`Sandwich in making......`);
     
    //arguments is the local to a function it accepts infinite number of arguments which are passed inside a function
    for (i=0; i<arguments.length;i++){
        
        //storing it in an array
        sandwich[i]=arguments[i];

        console.log(`...adding`,sandwich[i],'to your sandwich');
    }
    
    console.log(`Your yummilicious sandwich is ready to eat!\n\n\n`);
}

sandwich1= making_sandwich("chichken","cheese","fires");

sandwich2= making_sandwich('beef','mayonnaise','mustard sauce', 'cheese', 'cheddar' ,'cabbage','oreganos','mashrooms');

sandwich3= making_sandwich('nutella');
