// •	Add {number}: add a number to the end of the array
// •	Remove {number}: remove all occurrences of a particular number from the array
// •	RemoveAt {index}: removes number at a given index
// •	Insert {number} {index}: inserts a number at a given index

function arrayManipulations(arrStr) {
    let arrNum = arrStr
        .shift()
        .split(' ')
        .map(Number);
    for (let cmd of arrStr) {
        let comand = cmd.split(' ');
        let action = comand[0];
        let value = Number(comand[1]);
        if (action === 'Add') {
            arrNum.push(value);
        } else if (action === 'Remove') {
            let index = arrNum.indexOf(value);
            while (index !== -1) {
                arrNum.splice(index, 1);
                index = arrNum.indexOf(value);
            }
        } else if (action === 'RemoveAt') {
            arrNum.splice(value, 1);
        } else if (action === 'Insert') {
            let index = Number(comand[2]);
            arrNum.splice(index, 0, value);
        }
    }
    console.log(arrNum.join(' '))
}
arrayManipulations(['4 19 2 53 6 43', 'Add 3', 'Remove 2', 'RemoveAt 1', 'Insert 8 3'])
arrayManipulations(['6 12 2 65 6 42','Add 8','Remove 12','RemoveAt 3','Insert 6 2'])