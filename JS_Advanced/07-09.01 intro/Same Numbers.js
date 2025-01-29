function sameNumber(num) {
    let sum = 0;
    let sameNum = true;
    let number = num.toString().split('');
    for (let i = 0; i < number.length; i++) {
        if (number[0] !== number[i]) {
            sameNum = false;
        }
        sum += +number[i];
    }
    console.log(sameNum);
    console.log(sum);
}
sameNumber(1234)