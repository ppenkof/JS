function evenAndOddSubtraction(arr) {
    let evenSum = 0;
    let oddSum = 0;
    let currArr = arr;
    for (let i = 0; i < currArr.length; i++) {
        let currentElement = Number(currArr[i]);
        if (currentElement % 2 === 0) {
            evenSum += currentElement;
        } else {
            oddSum += currentElement;
        }
    }
    console.log(evenSum - oddSum);
}
evenAndOddSubtraction([1, 2, 3, 4, 5, 6])