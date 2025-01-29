function invalidNumber(params) {
    let num = Number(params[0]);

    if ((num>=100 && num<=200) || num==0){
       // console.log("valid");
    }else{
        console.log("invalid");
    }

}
invalidNumber(["10"])