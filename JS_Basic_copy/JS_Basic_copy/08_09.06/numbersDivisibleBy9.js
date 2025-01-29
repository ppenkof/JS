function numbersDivisibleBy9(params) {
    let num1 = Number(params[0]);
    let num2 = Number(params[1]);
    let devidble = 0;
    let sum = devidble;

    for (let i = num1; i <= num2; i++) {
        devidble = i;
        if (devidble % 9 === 0) {
            sum += devidble;
            //console.log(devidble);
        }

    }
    console.log(`The sum: ${sum}`);
    for (let i = num1; i <= num2; i++) {
        devidble = i;
        if (devidble % 9 === 0) {
            sum += devidble;
            console.log(devidble);
        }

    }
}
numbersDivisibleBy9(["100", "200"])