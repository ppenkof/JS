function arrayManipulator(arr, arrStr) {
    for (let cmd of arrStr) {
        let cmdArr = cmd.split(' ');
        let action = cmdArr.shift();
        if (action === 'add') {
            let index = Number(cmdArr.shift());
            let element = Number(cmdArr.shift());
            arr.splice(index, 0, element);
        } else if (action === 'addMany') {
            let index = Number(cmdArr.shift());
            let counter = cmdArr.length;
            for (let k = 0; k < counter; k++) {
                let currElement = Number(cmdArr.shift());
                if (index > arr.length) {
                    index = arr.length;
                }
                arr.splice(index + k, 0, currElement);
            }
        } else if (action === 'contains') {
            let element = Number(cmdArr.shift());
            let index = arr.indexOf(element);
            console.log(index);
        } else if (action === 'remove') {
            let index = Number(cmdArr.shift());
            arr.splice(index, 1);
        } else if (action === 'shift') {
            let position = Number(cmdArr.shift());
            for (let i = 0; i < position; i++) {
                let currElement = arr.shift();
                arr.push(currElement);
            }
        } else if (action === 'sumPairs') {
            let sumArr = [];
            for (let j = 0; j < arr.length; j += 2) {
                if (!arr[j + 1]){
                    arr[j + 1]=0;
                }else{
                    arr[j + 1];
                }
                sumArr.push(arr[j] + arr[j + 1]);
            }
            arr = sumArr;
        } else if (action === 'print') {
            console.log(`[ ${arr.join(', ')} ]`);
        }else {
            console.log(`[ ${arr.join(', ')} ]`);
            break;
        }

    }
}
//arrayManipulator([1, 2, 4, 5, 6, 7],['add 1 8', 'contains 1', 'contains 3', 'print'])
arrayManipulator([1, 2, 3, 4, 5], ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'sumPairs', 'print'])