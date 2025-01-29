function tennisRanklist(params) {
    let tournament = Number(params[0]);
    let startingPoints = Number(params[1]);
    index = 2;
    let finalPoints = 0;
    let averagePoints = 0;
    let qualification = params[index];
    let points = 0;
    let winner = 0;

    for (let i = 0; i <= tournament; i++) {
        qualification = params[index];
        index++;
        switch (qualification) {
            case "W":
                finalPoints += 2000;
                winner++;
                break;
            case "F":
                finalPoints += 1200;
                break;
            case "SF":
                finalPoints += 720;
                break;
        }
    }
    console.log(`Final points: ${startingPoints+finalPoints}`);
    console.log(`Average points: ${Math.floor(finalPoints / tournament)}`);
    console.log(`${(winner / tournament * 100).toFixed(2)}%`);

}
tennisRanklist(["7", "1200", "SF", "F", "W", "F", "W", "SF", "W"])