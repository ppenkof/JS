function addAndRemove(arrStr) {
    let resultArr = [];
    for (let i = 0; i < arrStr.length; i++) {
        let command = arrStr[i];
        switch (command) {
            case 'add':
                resultArr.push(i + 1);
                break;
            default:
                resultArr.pop();
                break;
        }
    }
    resultArr.length > 0 ? console.log(resultArr.join(' ')) : console.log('Empty');

}
addAndRemove(['add', 'add', 'add', 'add'])
addAndRemove(['add', 'add', 'remove', 'add', 'add'])
addAndRemove(['remove', 'remove', 'remove'])