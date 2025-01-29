function processOddNumbers(arr) {
    let currArr = [];
    for (let i = 0; i < arr.length; i++) {
        let value = arr[i];
        if (i % 2 !== 0) {
            let newVal = 2 * value;
            currArr.unshift(newVal);
        }
    }
    console.log(currArr.join(' '));
}
processOddNumbers([10, 15, 20, 25])
processOddNumbers([3, 0, 10, 4, 7, 3])