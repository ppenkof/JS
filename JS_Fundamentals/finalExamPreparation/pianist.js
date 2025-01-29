function pianist(arr) {
    let pieceCount = arr.shift();
    let pieces = {};
    for (let i = 0; i < pieceCount; i++) {
        let pieceItems = arr.shift().split('|');
        let [piece, composer, key] = pieceItems;
        pieces[piece] = { composer, key };
    }

    let cmd = arr.shift();
    while (cmd !== 'Stop') {

        let cmdItems = cmd.split('|');
        let action = cmdItems.shift();
        if (action === 'Add') {

            let [piece, composer, key] = cmdItems;
            if (!(piece in pieces)) {
                pieces[piece] = { composer, key };
                console.log(`${piece} by ${composer} in ${key} added to the collection!`);
            } else {
                console.log(`${piece} is already in the collection!`);
            }

        } else if (action === 'Remove') {

            let piece = cmdItems.shift();
            if (piece in pieces) {
                delete pieces[piece];
                console.log(`Successfully removed ${piece}!`);
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }

        } else if (action === 'ChangeKey') {

            let [piece, newKey] = cmdItems;
            if (piece in pieces) {
                pieces[piece].key = newKey;
                console.log(`Changed the key of ${piece} to ${newKey}!`);
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }

        }

        cmd = arr.shift();
    }

    let entries=Object.entries(pieces);
    for (const piece of entries) {
        console.log(`${piece[0]} -> Composer: ${piece[1].composer}, Key: ${piece[1].key}`);
    }
}
pianist([
        '4',
        'Eine kleine Nachtmusik|Mozart|G Major',
        'La Campanella|Liszt|G# Minor',
        'The Marriage of Figaro|Mozart|G Major',
        'Hungarian Dance No.5|Brahms|G Minor',
        'Add|Spring|Vivaldi|E Major',
        'Remove|The Marriage of Figaro',
        'Remove|Turkish March',
        'ChangeKey|Spring|C Major',
        'Add|Nocturne|Chopin|C# Minor',
        'Stop'
])
