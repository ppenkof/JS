function bombNumbers(arr, bomb) {
    let bombNumber = bomb.shift();
    let bombPower = bomb.shift();
    //let bombField = 2 * bombPower + 1;
    let index = arr.indexOf(bombNumber);
    // let beginning = index - bombPower;
    // let stopIndex = index + bombPower;
  
    while (index != -1) {
        // if (beginning < 0) {
        //     index = 0;
        // }
        // if (stopIndex >= arr.length) {
        //     stopIndex = arr.length - 1;
        // }
        let beginning = Math.max(0, index - bombPower);
        let stopIndex = Math.min(arr.length - 1, index + bombPower);

        arr.splice(beginning, stopIndex - beginning + 1);
        index = arr.indexOf(bombNumber);
    }
    let sum = arr.reduce((a, b) => a + b, 0);

    console.log(sum);
}
bombNumbers([1, 7, 7, 1, 2, 3],
    [7, 1]
)