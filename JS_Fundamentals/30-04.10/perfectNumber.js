function perfectNumber(num) {

    function calculateSumOfDividers(params) {
        let sumOfDividers = 0;
        for (let i = 1; i < params; i++) {
            if (num % i === 0) {
                sumOfDividers += i;
            }
        }
        return sumOfDividers;
    }

    let sum = calculateSumOfDividers(num);
    if (sum === num) {
        console.log("We have a perfect number!");
    } else {
        console.log("It's not so perfect.");
    }
}
perfectNumber(496)