function vacantion(params) {
    let excursionPrice = Number(params[0]);
    let savedMoney = Number(params[1]);
    let index = 2;
    let operation = params[index];
    index++;
    let money = Number(params[index]);
    let spendCounter = 0;
    let dayCounter = 0;
    let canSavemoney = true;

    while (savedMoney < excursionPrice) {
        dayCounter++;
        if (operation === "spend") {
            spendCounter++;
            savedMoney -= money;
            if (savedMoney < 0) { savedMoney = 0; }
        } else {
            spendCounter = 0;
            savedMoney += money;
        }
        if (spendCounter >= 5) {
            console.log("You can't save the money.");
            console.log(spendCounter);
            canSavemoney = false;
            break;
        }

        index++;
        operation = params[index];
        index++;
        money = Number(params[index]);

    }
    if(canSavemoney){console.log(`You saved the money for ${dayCounter} days.`);}
}
vacantion(["1",

"0",

"spend",

"0.01",

"spend",

"0.01",

"save",

"0.1",

"save",

"0.1"])