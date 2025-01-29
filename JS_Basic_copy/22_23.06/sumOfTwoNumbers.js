function sumOfTwoNumbers(params) {
    let startNum = Number(params[0]);
    let finishNum = Number(params[1]);
    let magicNum = Number(params[2]);
    let isTheFirstCombination = true;
    //let counter = 0;
    let commonCounter = 0;
    let num1 = 0;
    let num2 = 0;

    for (let a = startNum; a <= finishNum; a++) {
        num1 = a;
        for (let b = startNum; b <= finishNum; b++) {
            num2 = b;
            commonCounter++;
            if ((num1 + num2) === magicNum) {
                //counter++;
                isTheFirstCombination = true;
                break;
            } else {
                isTheFirstCombination = false;
            }
        }
        if (isTheFirstCombination) { break; }
    }
    if (isTheFirstCombination) {
        console.log(`Combination N:${commonCounter} (${num1} + ${num2} = ${num1 + num2})`);
    } else {
        console.log(`${commonCounter} combinations - neither equals ${magicNum}`);
    }
}
sumOfTwoNumbers(["88", 
"888", 
"2000"]);