function operationsBetweenNumbers(params) {
    let num1 = Number(params[0]);
    let num2 = Number(params[1]);
    let operation = params[2];
    let result = 0;
    let oddEven;
    let biggerNum = 0;
    let smallerNum = 0;

    if (num1 > num2) {
        biggerNum = num1;
        smallerNum = num2;
    } else {
        biggerNum = num2;
        smallerNum = num1;
    }

    switch (operation) {
        case "+":
            result = num1 + num2;
            if (result % 2 == 0) {
                oddEven = "even"
            } else {
                oddEven = "odd"
            }
            console.log(`${num1} + ${num2} = ${result} - ${oddEven}`);
            break;
        case "-":
            result = Math.abs(num1 - num2);
            if (result % 2 == 0) {
                oddEven = "even"
            } else {
                oddEven = "odd"
            }
            console.log(`${biggerNum} - ${smallerNum} = ${result} - ${oddEven}`);
            break;
        case "*":
            result = num1 * num2;
            if (result % 2 == 0) {
                oddEven = "even"
            } else {
                oddEven = "odd"
            }
            console.log(`${num1} * ${num2} = ${result} - ${oddEven}`);
            break;
        case "/":
            if (smallerNum === 0) { console.log(`Cannot divide ${num1} by zero`); break; }
            result = (biggerNum / smallerNum).toFixed(2);
            console.log(`${biggerNum} / ${smallerNum} = ${result}`);
            break;
        case "%":
            if (smallerNum === 0) { console.log(`Cannot divide ${num1} by zero`); break; }
            result = biggerNum % smallerNum;
            console.log(`${biggerNum} % ${smallerNum} = ${result}`);
            break;
    }
}
operationsBetweenNumbers(["112", "3", "%"])
