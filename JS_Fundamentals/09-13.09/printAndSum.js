function printAndSum(start, end) {
    let sumNum = 0;
    let row = '';
    for (let i = start; i <= end; i++) {
        if (i === start) { row += '' + i; } else { row += ' ' + i; }
        sumNum += i;
    }
    console.log(row);
    console.log(`Sum: ${sumNum}`);
}
printAndSum(50,60)