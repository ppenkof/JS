function jeweler(params) {
    let whiteGold = params.shift().split(' ').map(Number);
    let yellowGold = params.shift().split(' ').map(Number);
    let twins = 0;
    let leftoverGold = 0;

    for (let i = 0; i < whiteGold.length; i++) {
        if (whiteGold[i] + yellowGold[i] === 10) {
            twins++;
        } else if (whiteGold[i] + yellowGold[i] > 10) {
            while (whiteGold[i] + yellowGold[i] > 10 && yellowGold[i] >= 0) {
                yellowGold[i] -= 2;
            }
            if (whiteGold[i] + yellowGold[i] === 10) {
                twins++;
            } else {
                leftoverGold += whiteGold[i];
                leftoverGold += yellowGold[i];
            }
        } else if (whiteGold[i] + yellowGold[i] < 10) {

            leftoverGold += whiteGold[i];
            leftoverGold += yellowGold[i];

        }
    }

    twins += Math.floor(leftoverGold / 10);
    twins >= 7 ? console.log(`Great success, you created ${twins} earrings.`) : console.log(`Keep trying, you need ${7 - twins} more earrings.`);
}
jeweler(['2 7 8 5 1 6 1 7 5',
    '8 3 2 7 9 4 9 2 3'])
jeweler(['5 3 2 2 4',
    '5 5 8 2 6'])
