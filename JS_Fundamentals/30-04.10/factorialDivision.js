function factorialDivision(num1, num2) {

    function checkNumbers(number1, number2){
        let minNumber = Math.min(number1, number2);
        let maxNumber = Math.max(number1, number2);
        let output=[];
        output.push(minNumber);
        output.push(maxNumber);
        return output;
    }

    function calcFactorial(num) {
        let factorial = 1;
        while (num > 1) {
            factorial *= num;
            num--;
        }
        return factorial;
    }
    let minNum = checkNumbers(num1, num2)[0];
    let maxNum = checkNumbers(num1, num2)[1];
    let factorial1 = calcFactorial(maxNum);
    let factorial2 = calcFactorial(minNum);
    console.log((factorial1 / factorial2).toFixed(2));
}
factorialDivision(8,4)