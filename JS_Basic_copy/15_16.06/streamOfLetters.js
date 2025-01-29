function streamOfLetters(params) {
    let index = 0;
    let letter = params[index];
    let temporaryLetter = '';
    let wordSum = '';
    let shouldSum = true;
    let commandO = false;
    let commandN = false;
    let commandC = false;
    let addSpace = '';
    let completeWord = '';
    let commandLetter = '';
    let isWordFinished = true;

    while (letter !== 'End') {
        letter = params[index];
        if ((letter.charCodeAt(0) <= 64 || letter.charCodeAt(0) >= 91) && (letter.charCodeAt(0) <= 96 || letter.charCodeAt(0) >= 123)) {
            index++;
            continue;
        }
        if (letter === "c" || letter === "o" || letter === "n") {
            shouldSum = false;
            switch (letter) {
                case "c": commandC = true; break;
                case "o": commandO = true; break;
                case "n": commandN = true; break;
            }
            if (commandC && commandN && commandO) { addSpace = ' '; isWordFinished = true }
            if (temporaryLetter === letter || (commandLetter === letter && isWordFinished)) { shouldSum = true; }
            if (addSpace === ' ') {
                    commandC = false;
                    commandN = false;
                    commandO = false;
                    wordSum += addSpace;
                    completeWord = wordSum;
                    addSpace = '';
                    isWordFinished = false;
                }
            commandLetter = letter;
        } else {
            shouldSum = true;
        }
        temporaryLetter = letter;
        if (shouldSum) {
            if (letter !== 'End') {
                wordSum += letter;
            }
        }
        index++;
    }
    console.log(completeWord);
}
streamOfLetters(["H", "n", "e", "l", "l", "o", "o", "c", "t", "c", "h", "o", "e", "r", "e", "n", "e", "End"]);
streamOfLetters(["%", "!", "c", "^", "B", "`", "o", "%", "o", "o", "M", ")", "{", "n", "/", "A", "D", "End"])
streamOfLetters(['o', 'S', '%', 'o', 'l', '^', 'v', 'e', 'c', 'n', '&', 'm', 'e', 'c', 'o', 'n', 'End']);