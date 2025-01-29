function starEnigma(arr) {
    let counter = arr.shift();
    let decryptedCounter = [];
    for (let i = 0; i < counter; i++) {
        let encrypted = arr[i];
        let decryptedPattern = /[star]?/gi;
        let decrypted = '';
        let matches = encrypted.match(decryptedPattern).filter((ind) => ind.length > 0);
        let substract = matches.length;
        for (let symbol of encrypted) {
            let ascii = symbol.charCodeAt();
            ascii -= substract;
            let newSymbol = String.fromCharCode(ascii);
            decrypted += newSymbol;
        }
        decryptedCounter.push(decrypted);
    }

    let pattern = /@(?<planet>[A-Za-z]+)[^@\-!:>]*:(?<population>\d+)[^@\-!:>]*!(?<action>[AD])![^@\-!:>]*->(?<soldiers>\d+)/;

    let planetsAttack = [];
    let planetDestroied = [];
    for (let decrypted of decryptedCounter) {
        let matches = pattern.exec(decrypted);
        if (matches) {
            let { planet, action } = matches.groups;
            if (action === 'A') {
                planetsAttack.push(planet);
            } else {
                planetDestroied.push(planet);
            }
        }
    }

    planetsAttack.sort((a, b) => a.localeCompare(b));
    planetDestroied.sort((a, b) => a.localeCompare(b));

    console.log(`Attacked planets: ${planetsAttack.length}`);
    for (let planet of planetsAttack) {
        console.log(`-> ${planet}`);
    }
    console.log(`Destroyed planets: ${planetDestroied.length}`);
    for (let planet of planetDestroied) {
        console.log(`-> ${planet}`);
    }
}
starEnigma(['2',

    'STCDoghudd4=63333$D$0A53333',

    'EHfsytsnhf?8555&I&2C9555SR'])