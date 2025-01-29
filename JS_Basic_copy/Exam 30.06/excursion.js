function excursion(params) {
    let peopleNum = Number(params[0]);
    let overNightNum = Number(params[1]);
    let transportSpentNum = Number(params[2]);
    let museumSpentNum = Number(params[3]);

    let overNight = overNightNum * 20;
    let transportSpent = transportSpentNum * 1.60;
    let museumSpent = museumSpentNum * 6;
    let totalSpentPerPerson = overNight + transportSpent + museumSpent;
    let totalSpent = totalSpentPerPerson * peopleNum * 1.25;

    console.log(totalSpent.toFixed(2));
}
excursion(["20", "9", "33", "46"])