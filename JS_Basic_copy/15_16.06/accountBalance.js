function accountBalance(params) {
    let index = 0;
    let command = params[index];
    let sum = Number(command);
    let account = 0;
    index++;

    while (command !== "NoMoreMoney") {
        sum = Number(command);     
        if (sum < 0) {
            console.log(`Invalid operation!`);
            break;
        } else {
            account += sum;
            console.log(`Increase: ${sum.toFixed(2)}`);
        }
        command = params[index];
        index++;
    }
    console.log(`Total: ${account.toFixed(2)}`);
}
accountBalance(["5.51",

"69.42",

"100",

"NoMoreMoney"])