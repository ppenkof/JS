function cardGame(arr) {
    let pointDrowning = {};
    let value = new Map();
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
                    value.set('' + i, i);
                } else if (i === 11) {
                    value.set('J', i);
                } else if (i === 12) {
                    value.set('Q', i);
                } else if (i === 13) {
                    value.set('K', i);
                } else if (i === 14) {
                    value.set('A', i);
                } else if (i === 15) {
                    value.set('S', 4);
                } else if (i === 16) {
                    value.set('H', 3);
                } else if (i === 17) {
                    value.set('D', 2);
                } else if (i === 18) {
                    value.set('C', 1);
                }
            }
            sum += value.get(power) * value.get(multiplayer);
        }
        console.log(`${name}: ${sum}`);
    }

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