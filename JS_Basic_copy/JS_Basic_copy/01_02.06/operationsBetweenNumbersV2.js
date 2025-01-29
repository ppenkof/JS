function operationsBetweenNumbers(params) {
    let num1 = Number(params[0]);
    let num2 = Number(params[1]);
    let operation = params[2];
    let result = 0;
    let oddEven;
 
       switch (operation) {
        case "+":
            result = num1 + num2;
            if (result % 2 === 0) {
                oddEven = "even"
            } else {
                oddEven = "odd"
            }
            console.log(`${num1} + ${num2} = ${result} - ${oddEven}`);
            break;
        case "-":
            result = Math.abs(num1 - num2);
            if (result % 2 === 0) {
                oddEven = "even"
            } else {
                oddEven = "odd"
            }
            console.log(`${num1} - ${num2} = ${result} - ${oddEven}`);
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
            if (num2 === 0) { console.log(`Cannot divide ${num1} by zero`); break; }
            result = (num1 / num2).toFixed(2);
            console.log(`${num1} / ${num2} = ${result}`);
            break;
        case "%":
            if (num2 === 0) { console.log(`Cannot divide ${num1} by zero`); break; }
            result = num1 % num2;
            console.log(`${num1} % ${num2} = ${result}`);
            break;
    }
}
operationsBetweenNumbers(["10", "0", "%"])
