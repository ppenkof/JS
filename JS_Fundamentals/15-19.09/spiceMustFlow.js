function spiceMustFlow(strYield) {
    let totalSpiceAmount=0;
    let days=0;
    while(strYield>=100){
        let daylyYield = strYield-26;
        totalSpiceAmount+=daylyYield;
        days++;
        strYield-=10;
         if(strYield<100){
            totalSpiceAmount-=26;
        }
    }
    console.log(days);
    console.log(totalSpiceAmount);
}
spiceMustFlow(111)