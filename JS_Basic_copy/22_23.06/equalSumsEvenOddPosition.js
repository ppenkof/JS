function equalSumsEvenOddPosition(params) {
    let firstNum = Number(params[0]);
    let secondNum = Number(params[1]);
    let oddSum = 0;
    let evenSum = 0;
    let newNum = '';
    let counter = 0;
    let currentDig = 0;
   

    for (let i = firstNum; i <= secondNum; i++) {
        let currentNum = '' + i;
        oddSum = 0;
        evenSum = 0;
        for (let j = 0; j < currentNum.length; j++) {
            currentDig = Number(currentNum.charAt(j));
            if (j % 2 === 0) {
                oddSum += currentDig;
            } else {
                evenSum += currentDig;
            }
        }
        if (oddSum === evenSum ) {
            newNum += `${i} `;
            //counter++;
            //if (counter % 3 === 0) { 
                //newNum += '\n'; 
        //}
        }
    }
    console.log(newNum);
}
equalSumsEvenOddPosition(["123456",

    "124000"])