function calcularor(num1, num2, operator) {
    let operation = {
        'add': (a, b) => a + b,
        'subtract': (a, b) => a - b,
        'multiply': (a, b) => a * b,
        'divide': (a, b) => a / b,
    };
    let result = operation[operator](num1, num2);
    console.log(result);
}
calcularor(50, 13, 'subtract')