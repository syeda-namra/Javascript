//let ordinalNumbers = new Array();
len = 9;


for (i=0; i<len; i++){
    
        if(i == 0){     
            
            a=i+1;
            //console.log(i.toString()+"st");
            num = (a.toString())+"st";
            //console.log(num);
            ordinalNumbers= num;
            console.log(ordinalNumbers);

    }else if(i == 1){
            
            a=i+1
            num = (a.toString())+"nd";
            ordinalNumbers= num;
            console.log(ordinalNumbers);
        
    }else if(i == 2){

            a=i+1
            num = (a.toString())+"rd";
            ordinalNumbers = num;
            console.log(ordinalNumbers);

    }else{

            a=i+1
            num = (a.toString())+"th";
            ordinalNumbers= num;
            console.log(ordinalNumbers);

    }
}

//console.log(ordinalNumbers);