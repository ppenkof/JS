function palindromeIntegers(arr) {

    function checkIsPalindrome(num) {
        let num2Str = num + '';
        // let sum = '';
        // let revSum = '';
        // for (let i = 0; i < num2Str.length; i++) {
        //     let currDig = num2Str[i];
        //     sum += currDig;
        // }
        // for (let j = num2Str.length-1; j >= 0; j--) {
        //     let revCurrDig = num2Str[j];
        //     revSum += revCurrDig;
        // }

        //return sum === revSum;

        let reverseNum2Str = num2Str.split('').reverse().join('');
        return num2Str === reverseNum2Str;
    }

    for (let num of arr) {
        let isPalindrome = checkIsPalindrome(num);
        console.log(isPalindrome);
    }
}
palindromeIntegers([123, 323, 421, 121])