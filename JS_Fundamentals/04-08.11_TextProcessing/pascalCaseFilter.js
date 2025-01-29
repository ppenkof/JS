function pascalCaseFilter(text) {
    let copyText = text.split('');
    let newText = [];
    let isWord = true;
    let count = 0;
    let counter=0;
    let newArr = [];
    for (let letter of copyText) {
        counter++;
        let pattern = letter.charCodeAt();
        //NE NE NE
        //^[A-Z]+$/;
        if (pattern >= 65 && pattern <= 90) {
            if (count === 0 && isWord) {
                newArr.push(letter);
                count--;
            }
            isWord = true;
            count++;
        } else if (!(pattern >= 65 && pattern <= 90)) {
            newArr.push(letter);
            isWord=false;
        }

        if (isWord && count >= 1 || counter===copyText.length) {
            isWord = false;
            newText.push(newArr.join(''));
            newArr = [];
            count = 0;
            newArr.push(letter);
        }
    }
    console.log(newText.join(', '));
}
pascalCaseFilter('SplitMeIfYouCanHaHaYouCantOrYouCan')
pascalCaseFilter('ThisIsSoAnnoyingToDo')
pascalCaseFilter('HoldTheDoor')