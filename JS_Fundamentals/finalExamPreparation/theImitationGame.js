function theImitationGame(params) {
    encryptedMessage = params.shift();
    cmd = params.shift();
    while (cmd !== 'Decode') {

        let cmdItems = cmd.split('|');
        let action = cmdItems.shift();
        if (action === 'Move') {

            let lettersCount = cmdItems.shift();
            lettersCount = Number(lettersCount);
            encryptedMessage = encryptedMessage.substring(lettersCount) + encryptedMessage.substring(0, lettersCount);

        } else if (action === 'Insert') {

            let [index, value] = cmdItems;
            index = Number(index);
            encryptedMessage = encryptedMessage.substr(0, index) + value + encryptedMessage.substring(index);

        } else if (action === 'ChangeAll') {

            let [substring, replacement] = cmdItems;
            while (encryptedMessage.includes(substring)) {
                encryptedMessage = encryptedMessage.replace(substring, replacement);
            }
            //encryptedMessage = encryptedMessage.replaceAll(substring, replacement);

        }

        cmd = params.shift();
    }

    console.log(`The decrypted message is: ${encryptedMessage}`);
}
theImitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode',
])
theImitationGame([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode',])
