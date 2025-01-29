function archeryChampion(arrStr) {
    let target = arrStr.shift().split('|').map((a) => Number(a));
    let currElem = 0;
    let points = 0;
    let decElement = 0;
    let newTarget = [];
    for (let i = 0; i < arrStr.length; i++) {
        let command = arrStr.shift().split('@');
        let action = command.shift();
        let index = Number(command.shift());
        let lenGth = Number(command.shift());

        if (action === 'Shoot Right') {
            if (index >= 0 && index < target.length) {
                let goal = (index + lenGth);
                if (goal > target.length) {
                    lenGth %= target.length;
                    goal = lenGth - 1;
                }
                currElem = target.splice(goal, 1).shift();

                if (currElem >= 5) {
                    points += 5;
                } else {
                    points += currElem;
                }

                decElement = currElem - 5;
                if (decElement < 0) {
                    decElement = 0;
                }

                if (goal < 0) {
                    goal = goal + target.length + 1;
                } 
                target.splice(goal, 0, decElement);
            } else {
                i = 0;
                continue;
            }

        } else if (action === 'Shoot Left') {
            if (index >= 0 && index < target.length) {
                let goal = (index - lenGth);
                if (goal < (-1 * target.length)) {
                    lenGth %= target.length;
                    goal = -1 * lenGth;
                }
                currElem = target.splice(goal, 1).shift();
                if (currElem >= 5) {
                    points += 5;
                } else {
                    points += currElem;
                }
                decElement = currElem - 5;
                if (decElement < 0) {
                    decElement = 0;
                }
                target.splice(goal + 1, 0, decElement);
            } else {
                i = 0;
                continue;
            }

        } else if (action === 'Reverse') {
            newTarget = target.reverse();
        } else {
            break;
        }
    }

    console.log(newTarget.join(' - '));
    console.log(`John finished the archery tournament with ${points} points!"`);

}
archeryChampion(["10|10|10|10|10", "Shoot Left@0@2", "Shoot Right@4@5", "Shoot Right@6@5", "Reverse", "Game over"])
archeryChampion(["20|30|40|50|60", "Shoot Left@0@12", "Shoot Right@4@15", "Shoot Left@6@5", "Reverse", "Game over"])