function addAndRemoveElements(input) {

    let num = 1;
    const result = [];
    input.forEach(element => {
        if (element === 'add') {
            result.push(num);
        } else if (element === 'remove') {
            result.pop();
        }
        num++;
    });
    if (result.length >= 1) {
        console.log(result.join('\n'));
    } else {
        console.log('Empty');
    }
}
addAndRemoveElements(['add',

    'add',

    'add',

    'add'])