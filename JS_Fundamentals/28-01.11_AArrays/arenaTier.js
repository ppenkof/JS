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
                    for (let gladiator of [gladiator1, gladiator2]) {
                        let entries = Object.entries(gladiators[gladiator]);
                        console.log(entries);
                        let [currTechnique, currSkill] = entries;
                        //let previousTechnique='';
                        for (let [technique, skill] of entries) {
                            if(technique===currTechnique){
                                    if(currSkill>skill){
                                        delete gladiators[gladiator2];
                                    }else{
                                        delete gladiators[gladiator1];
                                    }
                            }
                            //let currTechnique = previousTechnique;
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

    let entries = Object.entries(gladiators);

}
arenaTier(['Peter -> Duck -> 400', 'Julius -> Shield -> 150', 'Gladius -> Heal -> 200', 'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250', 'Peter vs Gladius', 'Gladius vs Julius', 'Gladius vs Maximilian', 'Ave Cesar'])