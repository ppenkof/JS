function specialNumbers(num) {
    let sum = 0;
    let tempNum = 0;
    let isSpecial = '';
    for (let i = 1; i <= num; i++) {
        tempNum = i;
        while (tempNum > 0) {
            sum += tempNum % 10;
            tempNum = Math.floor(tempNum / 10);
        }
        if (sum === 5 || sum === 7 || sum === 11) {
            isSpecial = 'True';
        } else {
            isSpecial = 'False';
        }
        console.log(`${i} -> ${isSpecial}`);
        sum = 0;
    }
}
specialNumbers(25)