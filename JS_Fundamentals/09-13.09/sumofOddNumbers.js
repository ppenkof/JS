function sumofOddNumbers(count) {
    let sum = 0;
    let countIndex = 0;
    let index = 0;
    while (countIndex < count) {
        if (index % 2 !== 0) {
            countIndex++;
            console.log(index);
            sum += index;
        }
        index++;
        
    }
    console.log("Sum: " + sum);
}
sumofOddNumbers(3)