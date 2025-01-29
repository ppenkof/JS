function registration(arr) {
    let userName = arr.shift();
    let cmd = arr.shift();
    while (cmd !== 'Registration') {

        let cmdItems = cmd.split(' ');
        let action = cmdItems.shift();

        if (action === 'Letters') {
            let desireCase = cmdItems.shift();
            desireCase === 'Lower' ? userName = userName.toLowerCase() : userName = userName.toUpperCase();
            console.log(userName);

        } else if (action === 'Substring') {

            let substring = cmdItems.shift();
            if (userName.includes(substring)) {
                userName = userName.replace(substring, '');
                console.log(userName);
            } else {
                console.log(`The username ${userName} doesn't contain ${substring}.`);
            }

        } else if (action === 'IsValid') {

            let char = cmdItems.shift();
            userName.includes(char) ? console.log('Valid username.') : console.log(`${char} must be contained in your username.`);

        } else if (action === 'Reverse') {

            let [startIndex, endIndex] = cmdItems;
            startIndex = Number(startIndex);
            endIndex = Number(endIndex);
            if (startIndex >= 0 && endIndex < userName.length) {
                let cuttedReverse = userName.substring(startIndex, endIndex + 1).split('').reverse().join('');
                //userName = userName.substring(0, startIndex) + cuttedReverse + userName.substring(endIndex + 1)
                console.log(cuttedReverse);
            }

        } else if (action === 'Replace') {

            let char = cmdItems.shift();
            while (userName.includes(char)) {
                userName = userName.replace(char, '-');
            }
            console.log(userName);
        }

        cmd = arr.shift();
    }


}
registration(['John',
    'Letters Lower',
    'Substring SA',
    'IsValid @',
    'Registration'
])
registration(['ThisIsSoftUni',
    'Reverse 1 3',
    'Replace S',
    'Substring hi',
    'Registration'
])