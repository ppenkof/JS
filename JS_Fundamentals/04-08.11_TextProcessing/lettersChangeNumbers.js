function lettersChangeNumbers(str) {
    let calcArr = str.trim().split(' ').filter(a => a.length > 1);
    let sum = 0;
    let result=0;
    for (const string of calcArr) {
        let number = +string.substring(1, string.length-1);
        let pattern = /[A-Z]/;
        if (pattern.test(string[0])) {
            sum = number / (string.charCodeAt(0) - 64);
        } else {
            sum = number * (string.charCodeAt(0) - 96);
        }
        if (pattern.test(string[string.length - 1])) {
            sum -= (string.charCodeAt(string.length - 1) - 64);
        } else {
            sum += (string.charCodeAt(string.length - 1) - 96);
        }
        result+=sum;
    }
    console.log(result.toFixed(2));
}
lettersChangeNumbers('A12b    s17G  ')
lettersChangeNumbers('P34562Z q2576f H456z')
lettersChangeNumbers('a1A')