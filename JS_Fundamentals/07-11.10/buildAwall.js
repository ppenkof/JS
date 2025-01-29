function buildAwall(arr) {

    arr.map((a) => Number(a));
    let concrete = 195;
    let concretePrice = 1900;
    let spentConcrete = [];
    let crewCounts = arr.length;
    let crew = 0;

    while (crewCounts > 0) {
        for (let i = 0; i < crewCounts; i++) {
            crew = arr[i];
            if (crew >= 30) {
                arr.splice(i, 1);
                let equalElement = arr.includes(crew);
                while (equalElement) {
                    let index = arr.indexOf(crew);
                    arr.splice(index, 1);
                    equalElement = arr.includes(crew);
                }
                i--;
             } else {
                arr.splice(i, 1);
                arr.splice(i, 0, crew + 1);
            }
            crewCounts = arr.length;
        }
        if (crewCounts <= 0) {
            break;
        }
        let concreteSpentPerDay = crewCounts * concrete;
        spentConcrete.push(concreteSpentPerDay);
    }
    console.log(spentConcrete.join(', '));
    let concreteSum = spentConcrete.reduce((a, b) => a + b, 0);
    console.log(`${concretePrice * concreteSum} pesos`);
}
buildAwall([17, 22, 17, 19, 17])
buildAwall([17])