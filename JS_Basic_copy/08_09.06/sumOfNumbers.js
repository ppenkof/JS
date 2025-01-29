function sumOfNumbers(params) {
    let num = params[0];
    let number = 0;
    let sum = 0;
    for (let index = 0; index < num.length; index++) {
        number = Number(num[index]);
        sum += number;
    }
    console.log(`The sum of the digits is: ${sum}`);
}
sumOfNumbers(["564891"])