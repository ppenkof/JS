function integerAndFloat(num1, num2, num3) {
    let sum = num1 + num2 + num3;
    sum % 1 === 0 ? sum += ' - Integer' : sum += ' - Float';
    console.log(sum);
}
integerAndFloat(1, 2, 3.5)