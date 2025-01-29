function cardGame(arr) {
    let pointDrowning = {};
    let value = new Set('2','3','4','5','6','7','8','9','10','J','Q','K','A');
    for (let argument of arr) {
        let [name, deck] = argument.split(': ');
        let typeCard = deck.split(', ');
        for (let card of typeCard) {
            if (!(name in pointDrowning)) {
                pointDrowning[name] = [card];
            } else {
                if (!(pointDrowning[name].includes(card))) {
                    pointDrowning[name].push(card);
                }
            }
        }
    }
    let entries = Object.entries(pointDrowning);
    for (const element of entries) {
        let [name, arrPower] = element;
        let sum = 0;
        for (const card of arrPower) {
            let [power, multiplayer] = card.split('');
            if (card.length > 2) {
                power = '10';
                multiplayer = card[2];
            }
            for (let i = 2; i <= 18; i++) {
                if (i < 11) {
                    if(value.has('' + i)){
                        value.add(i);
                    }
                } else if (i === 11) {
                    if(value.has('J')){ value.add(i);}
                } else if (i === 12) {
                    if(value.has('Q')){ value.add(i);}
                } else if (i === 13) {
                    if(value.has('K')){ value.add(i);}
                } else if (i === 14) {
                    if(value.has('A')){ value.add(i);}
                } else if (i === 15) {
                    if(value.has('S')){ value.add(4);}
                } else if (i === 16) {
                    if(value.has('H')){ value.add(3);}
                } else if (i === 17) {
                    if(value.has('D')){ value.add(2);}
                } else if (i === 18) {
                    if(value.has('C')){ value.add(1);}
                }
            }
            sum += value.values(power) * value.values(multiplayer);
        }
        console.log(`${name}: ${sum}`);
    }
//It doesn't work!!!
}
cardGame([

    'John: 2C, 4H, 9H, AS, QS',

    'Slav: 3H, 10S, JC, KD, 5S, 10S',

    'Alex: 6H, 7S, KC, KD, 5S, 10C',

    'Thomas: QH, QC, JS, JD, JC',

    'Slav: 6H, 7S, KC, KD, 5S, 10C',

    'Thomas: QH, QC, JS, JD, JC',

    'Alex: 6H, 7S, KC, KD, 5S, 10C',

    'Thomas: QH, QC, JS, JD, JC',

    'John: JD, JD, JD, JD'

])