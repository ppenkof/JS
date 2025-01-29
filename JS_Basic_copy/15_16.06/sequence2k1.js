function sequence2k1(params) {
    let num = Number(params[0]);
    let currentNum = 1;

    while (currentNum <= num) {
        console.log(currentNum);
        currentNum = 1 + 2 * currentNum;
        
    }
}
sequence2k1(["31"])