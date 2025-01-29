function counterStrike(arrStr) {
    let initialEnergy = Number(arrStr.shift());
    let battleCount = 0;
    for (let index = 0; index < arrStr.length; index++) {
        
        if (initialEnergy >= Number(arrStr[index])) {
            initialEnergy -= arrStr[index];
            battleCount++;
            if (battleCount % 3 === 0) {
                initialEnergy += battleCount;
            }
        } else if (arrStr[index] === 'End of battle') {
            console.log(`Won battles: ${battleCount}. Energy left: ${initialEnergy}`);
            return;
        } else {
            console.log(`Not enough energy! Game ends with ${battleCount} won battles and ${initialEnergy} energy`);
            return;
        }
    }

}
counterStrike(["100",
    "10",
    "10",
    "10",
    "1",
    "2",
    "3",
    "73",
    "10"])
counterStrike(["200",
"54",
"14",
"28",
"13",
"End of battle"])
