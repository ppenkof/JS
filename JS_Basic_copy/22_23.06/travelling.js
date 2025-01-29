function travelling(params) {
        let index =2;
        let destination=params[0];
        //index++;
        let price=Number(params[1]);
        //index++;
        let savedSum=Number(params[2]);
        let totalSum=0;

    while(destination!=="End"){    
        while(totalSum<price){
            savedSum=Number(params[index]);
            totalSum+=savedSum;
            index++;           
        }
        console.log(`Going to ${destination}!`);
        totalSum=0;
        if(destination==String){index++;continue;}
        destination=params[index];
        index++;
        price=Number(params[index]);
        index++;   
    }
}
travelling(["Greece",
"1000",
"200",
"201",
"300",
"100",
"150",
"240",
"Spain",
"1200",
"300",
"500",
"193",
"423",
"End"])
travelling(["France",
"2000",
"300",
"300",
"200",
"400",
"190",
"258",
"360",
"Portugal",
"1450",
"400",
"400",
"200",
"300",
"300",
"Egypt",
"1900",
"1000",
"280",
"300",
"500",
"End"])

