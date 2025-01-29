function arenaTier(arr) {
    let gladiators = {};
    for (let iterator of arr) {
        if (iterator === 'Ave Cesar') {
            break;
        } else {
            let [gladiator, technique, skill] = iterator.split(' -> ');
            if (iterator.includes('vs')) {
                let [gladiator1, gladiator2] = iterator.split(' vs ');
                if (gladiator1 in gladiators && gladiator2 in gladiators) {
                    for (let technique in gladiators[gladiator2]) {
                        let previousTechnique = technique;
                        for (let technique in gladiators[gladiator1]) {
                            let currTechnique = technique;
                            if (currTechnique === previousTechnique) {
                                if (gladiators[gladiator1][currTechnique] > gladiators[gladiator2][currTechnique]) {
                                    delete gladiators[gladiator2];
                                } else {
                                    delete gladiators[gladiator1];
                                }
                            }
                        }
                    }
                }
                continue;
            }


            if (!(gladiator in gladiators)) {
                gladiators[gladiator] = {};
            }
            if (!(technique in gladiators[gladiator])) {
                gladiators[gladiator][technique] = {};
                gladiators[gladiator][technique] = +skill;
            }

            if (+skill > gladiators[gladiator][technique].skill) {
                gladiators[gladiator][technique] = +skill;
            }
        }

    }

    let totalSkill = [];
    let entries = Object.entries(gladiators).sort((a, b) => a[0].localeCompare(b[0]));
    let previousGladiator = entries[0][0];
    for (let item of entries) {
        let [gladiator, technique] = item;
        let currGladiator = gladiator;
        let entriesTech = Object.entries(technique);
        let skills = 0;
        for (let gladiatorSkills of entriesTech) {
            let technique = gladiatorSkills[0];
            if (currGladiator === previousGladiator && skills !== 0) {
                skills += gladiatorSkills[1];
            } else {
                skills = gladiatorSkills[1];
            }
            currGladiator = previousGladiator;
        }
        totalSkill.push([gladiator, skills]);
    }

    totalSkill.sort((a, b) => (b[1] - a[1]) || a[0].localeCompare(b[0]));
    for (let i = 0; i < totalSkill.length; i++) {
        let gladiator = totalSkill[i][0];
        let total = totalSkill[i][1];
        console.log(`${gladiator}: ${total} skill`);
        if (gladiator in gladiators) {
            let entriesGlad = Object.entries(gladiators[gladiator]).sort((a, b) => (b[1] - a[1]) || a[0].localeCompare(b[0]));
            for (let [technique, skills] of entriesGlad) {
                console.log(`- ${technique} <!> ${skills}`);
            }
        }
    }

}
arenaTier(['Peter -> Duck -> 400', 'Julius -> Shield -> 150', 'Gladius -> Heal -> 200', 'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250', 'Peter vs Gladius', 'Gladius vs Julius', 'Gladius vs Maximilian', 'Ave Cesar'])
// arenaTier(['Peter -> BattleCry -> 400', 'Alex -> PowerPunch -> 300', 'Stefan -> Duck -> 200',
//     'Stefan -> Tiger -> 250', 'Ave Cesar'])