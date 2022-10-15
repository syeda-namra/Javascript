function BMIValue(inchHeight, lbWeight)
{       
        //let inchHeight = parseFloat(prompt(`Enter height in inches `));
        //inchHeight = inchHeight.toFixed(3);     //after decimal 3 digits
        inchHeight= document.getElementById("inchHeight").value;
        console.log(inchHeight);

        document.write(`The height in inches is : `,inchHeight,`<br><br>`);

        //let lbWeight = parseFloat(prompt(`Enter weight in pounds(lbs) `));
        //lbWeight =lbWeight.toFixed(3);     //after decimal 3 digits

        lbWeight= document.getElementById("lbWeight").value;
        //lbWeight= document.getElementById("lbWeight").value;
        document.write(`The weight in lbs(pounds) : `,lbWeight ,`<br><br>`);

        let cmHeight = inchHeight * 2.54;

        document.write(`The height in cm : `,cmHeight ,`<br><br>`);

        let kgWeight = lbWeight/2.205;

        document.write(`The weight in kilos : `,kgWeight ,`<br><br>`);

        let mHeight = cmHeight/100;

        document.write(`The height in meters : `,mHeight ,`<br><br>`);

        //Height = mHeight^2;
        console.log(mHeight);
        BMI = kgWeight / (mHeight^2);

        document.write(`BMI(BODY MASS INDEX) VALUE = `, BMI);


}