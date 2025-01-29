function sumDigit(num) {
     let sum = 0;
    let tempDigit = +num;
    while (tempDigit > 0) {
        sum += tempDigit % 10;
        tempDigit = Math.floor(tempDigit / 10);
    }
    console.log(sum);

    // num = num.toString();
    // for (let i = 0; i < num.length; i++) {
    //     sum += Number(num[i]);
    // }
    // console.log(sum);
}
sumDigit(245678)