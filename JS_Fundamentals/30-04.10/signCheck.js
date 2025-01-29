

function signCheck(numOne, numTwo, numThree) {
    let result = checkSing(numOne, numTwo, numThree)
    console.log(result);

    function checkSing(a, b, c) {
        if ((a < 0 && b < 0) || (b < 0 && c < 0) || (a < 0 && c < 0)) {
            if (a < 0 && b < 0 && c < 0) {
                return 'Negative';
            } else {
                return 'Positive';
            }
        } else if (a > 0 && b > 0 && c > 0) {
            return 'Positive';
        } else {
            return 'Negative';
        }
    }
}
signCheck(-5,
    -12,
    -15
)