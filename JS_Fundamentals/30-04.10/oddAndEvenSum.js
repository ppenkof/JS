function oddAndEvenSum(num) {
    // let evenDigit = 0;
    // let oddDigit = 0;

    // let num2Str = num + '';
    // for (let i = 0; i < num2Str.length; i++) {
    //     let currDig = Number(num2Str[i]);
    //     if (currDig % 2 === 0) {
    //         evenDigit += currDig;
    //     } else {
    //         oddDigit += currDig;
    //     }

    // }
    function calcOddAndEvenSum(numStr) {

        let evenDigit = 0;
        let oddDigit = 0;

        for (let i = 0; i < num2Str.length; i++) {
            let currDig = Number(num2Str[i]);
            if (currDig % 2 === 0) {
                evenDigit += currDig;
            } else {
                oddDigit += currDig;
            }

        }
        return [evenDigit, oddDigit];
    }
    let num2Str = num + '';
    let resultArr = calcOddAndEvenSum(num2Str);
    let evenDigit = resultArr[0];
    let oddDigit = resultArr[1];

    console.log(`Odd sum = ${oddDigit}, Even sum = ${evenDigit}`);
}
oddAndEvenSum(1000435)