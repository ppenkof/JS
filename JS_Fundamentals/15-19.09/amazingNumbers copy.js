function amazingNumbers(num) {
    let sum = 0;
    let rounded = 0;
    for (let i = num; i >= 1; i /= 10) {
        if (i % 1 !== 0) {
            rounded = Math.floor(i);
            i = rounded;
        }
        sum += i % 10;
    }
    console.log(sum === 9 ? `${num} Amazing? True` : `${num} Amazing? False`);
}
amazingNumbers(112211)