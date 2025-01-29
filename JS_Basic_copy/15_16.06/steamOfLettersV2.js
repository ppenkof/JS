function streamOfLettersV2(params) {
    let index = 0;
    let letter = params[index];
    let wordSum = '';
    let shouldSum = true;
    let commandO = false;
    let commandN = false;
    let commandC = false;
    let addSpace = '';
    let completeWord = '';
    let isWordFinished = false;

    while (letter !== 'End') {
        letter = params[index];
        if ((letter.charCodeAt(0) <= 64 || letter.charCodeAt(0) >= 91) && (letter.charCodeAt(0) <= 96 || letter.charCodeAt(0) >= 123)) {
            index++;
            continue;
        } else if (letter === "c" || letter === "o" || letter === "n") {
            shouldSum = false;
            if (letter === "c") {
                if (commandC) { shouldSum = true; }
                commandC = true;
                if (letter === "o" && commandO) {
                    shouldSum = true;
                }
                if (letter === "n" && commandN) {
                    shouldSum = true;
                }
                isWordFinished = false;
            }
            if (letter === "o" ) {
                if (commandO) { shouldSum = true; }
                commandO = true;
                if (letter === "c" && commandC) {
                    shouldSum = true;
                }
                if (letter === "n" && commandN) {
                    shouldSum = true;
                }
                isWordFinished = false;
            }
            if (letter === "n") {
                if (commandN) { shouldSum = true; }
                commandN = true;
                if (letter === "o" && commandO) {
                    shouldSum = true;
                }
                if (letter === "c" && commandC) {
                    shouldSum = true;
                }
                isWordFinished = false;
            }

            if (commandC && commandN && commandO) {
                addSpace = ' ';
                wordSum += addSpace;
                completeWord = wordSum;
                isWordFinished = true;
                commandC = false;
                commandN = false;
                commandO = false;
            }
        } else {
            shouldSum = true;
        }
        index++;
        if (shouldSum) {
            if (letter !== 'End') {
                wordSum += letter;
            }
        }
    }
    console.log(completeWord);
}
streamOfLettersV2(["H", "n", "e", "l", "l", "o", "o", "c", "t", "c", "h", "o", "e", "r", "e", "n", "e", "End"]);
streamOfLettersV2(["%", "!", "c", "^", "B", "`", "o", "%", "o", "o", "M", ")", "{", "n", "/", "A", "D", "End"])
streamOfLettersV2(['o', 'S', '%', 'o', 'l', '^', 'v', 'e', 'c', 'n', '&', 'm', 'e', 'c', 'o', 'n', 'End']);