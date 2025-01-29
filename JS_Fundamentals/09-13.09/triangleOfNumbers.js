function triangleOfNumbers(number) {
    let row = '';
    for (let i = 1; i <= number; i++) {
        for (let j = 1; j <= i; j++) {
            if (j === 1) { row += '' + i; } else { row += ' ' + i; }
        }
        console.log(row);
        row = '';
    }
}
triangleOfNumbers(2)