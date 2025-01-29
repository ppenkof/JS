function passwordGenerator(arrStr) {
    let thirthWord = arrStr[2].toUpperCase().split('');
    let concatStr = arrStr[0].toLowerCase() + arrStr[1].toLowerCase();
    let count = 0;
    let newText = '';
    for (let i = 0; i < concatStr.length; i++) {
        let letter = concatStr[i];
        let pattern = /[aeiou]/g;
        if (pattern.test(letter)) {
            newText = newText + thirthWord[count];
            count++;
            if (count === thirthWord.length) {
                count = 0;
            }
        } else {
            newText = newText + letter;
        }
    }
    let password=newText.split('').reverse().join('');
    console.log(`Your generated password is ${password}`);
}
passwordGenerator([

    'ilovepizza',

    'ihatevegetables',

    'orange'

])