function bonusScore(params) {
    let score = Number(params[0]);
    let bonus = 0;
    let extraBonus = 0;
    if (score % 2 == 0) {
        extraBonus = 1;
    } else if (score % 5 == 0) {
        extraBonus = 2;
    }
    if (score <= 100) {
        bonus = 5;
    } else if (score < 1000) {
        bonus = score * 0.2;
    } else {
        bonus = score * 0.1;
    }
    console.log(bonus + extraBonus);
    console.log(score + bonus + extraBonus);
}
bonusScore(["20"])