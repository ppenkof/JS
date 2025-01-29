function oscars(params) {
    let actor = params[0];
    let scoreAcademy = Number(params[1]);
    let evaluaterNumber = Number(params[2]);
    let evaluaterName = params[3];
    let index = 3;
    let currentEvalScores = 0;
    let totalScore = scoreAcademy;

    for (let i = 1; i <= evaluaterNumber; i++) {
        let evaluaterChar = params[index];
        let evaluaterScore = params[index+1];
        currentEvalScores = (evaluaterChar.length * evaluaterScore) / 2;
        index+=2;
        totalScore += currentEvalScores;

        if (totalScore >= 1250.5) {
            console.log(`Congratulations, ${actor} got a nominee for leading role with ${totalScore.toFixed(1)}!`)
            break;
        } else {
            if (i === evaluaterNumber) { 
                console.log(`Sorry, ${actor} you need ${(1250.5 - totalScore).toFixed(1)} more!`); 
            }
        }
    }

}
oscars(["Sandra Bullock", "340", "5", "Robert De Niro", "50", "Julia Roberts", "40.5", "Daniel Day-Lewis", "39.4", "Nicolas Cage", "29.9", "Stoyanka Mutafova", "33"])